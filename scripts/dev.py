import os
import shutil
import signal
import subprocess
import sys
import threading
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BACKEND_DIR = ROOT / "backend"
FRONTEND_DIR = ROOT / "frontend"


def project_python() -> str:
    candidates = [
        ROOT / "env" / "Scripts" / "python.exe",
        ROOT / ".venv" / "Scripts" / "python.exe",
        ROOT / "venv" / "Scripts" / "python.exe",
        ROOT / "env" / "bin" / "python",
        ROOT / ".venv" / "bin" / "python",
        ROOT / "venv" / "bin" / "python",
    ]
    for candidate in candidates:
        if candidate.exists():
            return str(candidate)
    return sys.executable


def npm_command() -> str | None:
    return shutil.which("npm.cmd") or shutil.which("npm")


def frontend_command() -> list[str]:
    vite_cmd = FRONTEND_DIR / "node_modules" / ".bin" / "vite.cmd"
    vite_bin = FRONTEND_DIR / "node_modules" / ".bin" / "vite"
    if vite_cmd.exists():
        return [str(vite_cmd), "--host", "127.0.0.1", "--port", "5173"]
    if vite_bin.exists():
        return [str(vite_bin), "--host", "127.0.0.1", "--port", "5173"]

    npm = npm_command()
    if npm:
        return [
            npm,
            "run",
            "dev",
            "--",
            "--host",
            "127.0.0.1",
            "--port",
            "5173",
        ]

    raise RuntimeError(
        "npm was not found and frontend/node_modules is missing. "
        "Install Node.js with npm, then run: npm install --prefix frontend"
    )


def ensure_backend_ready(python: str) -> None:
    check = subprocess.run(
        [python, "-c", "import django, rest_framework"],
        cwd=ROOT,
        text=True,
        capture_output=True,
    )
    if check.returncode != 0:
        raise RuntimeError(
            "Backend dependencies are not installed. Run: "
            f"{python} -m pip install -r requirements.txt"
        )


def stream_output(name: str, process: subprocess.Popen[str]) -> None:
    assert process.stdout is not None
    for line in process.stdout:
        print(f"[{name}] {line}", end="")


def start_process(name: str, command: list[str], cwd: Path) -> subprocess.Popen[str]:
    env = os.environ.copy()
    env.setdefault("PYTHONUNBUFFERED", "1")
    return subprocess.Popen(
        command,
        cwd=cwd,
        env=env,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )


def stop_processes(processes: list[subprocess.Popen[str]]) -> None:
    for process in processes:
        if process.poll() is None:
            if os.name == "nt":
                process.terminate()
            else:
                process.send_signal(signal.SIGTERM)
    for process in processes:
        if process.poll() is None:
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()


def main() -> int:
    processes: list[subprocess.Popen[str]] = []
    try:
        python = project_python()
        ensure_backend_ready(python)

        commands = [
            (
                "backend",
                [python, "manage.py", "runserver", "127.0.0.1:8000", "--noreload"],
                BACKEND_DIR,
            ),
            ("frontend", frontend_command(), FRONTEND_DIR),
        ]

        for name, command, cwd in commands:
            processes.append(start_process(name, command, cwd))

        for name, process in zip(["backend", "frontend"], processes):
            thread = threading.Thread(target=stream_output, args=(name, process), daemon=True)
            thread.start()

        print("Development servers are starting:")
        print("  Backend:  http://127.0.0.1:8000")
        print("  Frontend: http://127.0.0.1:5173")
        print("Press Ctrl+C to stop both services.")

        while True:
            for process in processes:
                if process.poll() is not None:
                    stop_processes(processes)
                    return process.returncode or 0
            threading.Event().wait(0.5)
    except KeyboardInterrupt:
        print("\nStopping development servers...")
        stop_processes(processes)
        return 0
    except RuntimeError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
