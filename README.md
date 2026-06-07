# Izak's Photos

A full-stack photography portfolio built with Django REST Framework and React/Vite. The project is organized so the backend API and frontend client can be started together from the repository root.

## Features

- Editorial photography homepage with responsive desktop and mobile layouts
- Functional navigation for Home, Portfolio, About, Services, and Contact
- Interactive portfolio category tabs and selected-project detail panel
- Booking/contact form wired to a Django REST endpoint for local development
- Project metadata served by the Django API with frontend image assets managed in React

## Tech Stack

- Backend: Django, Django REST Framework, SQLite for local development
- Frontend: React, Vite, Bootstrap, React Bootstrap
- Tooling: Python virtual environment, npm, unified development launcher

## Project Structure

```text
IZAK-S-PHOTOS/
|-- backend/              # Django project and API app
|   |-- api/              # API views, tests, app configuration
|   |-- backend/          # Django settings, URLs, ASGI/WSGI
|   `-- manage.py
|-- frontend/             # React/Vite application
|   `-- src/
|-- scripts/
|   `-- dev.py            # Starts backend and frontend together
|-- requirements.txt      # Python dependencies
`-- package.json          # Root convenience scripts
```

## Requirements

- Python 3.11 or newer
- Node.js 20 or newer with npm

## Setup

Create and activate a virtual environment:

```powershell
python -m venv env
.\env\Scripts\Activate.ps1
```

Install backend dependencies:

```powershell
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

Install frontend dependencies:

```powershell
npm install --prefix frontend
```

Optional: copy the environment templates if you want to override defaults.

```powershell
Copy-Item .env.example .env
Copy-Item frontend/.env.example frontend/.env
```

## Development

Start Django and Vite together from one terminal:

```powershell
python scripts/dev.py
```

If npm is available globally, you can also run:

```powershell
npm run dev
```

Default local URLs:

- Frontend: http://127.0.0.1:5173
- Backend: http://127.0.0.1:8000
- API health check: http://127.0.0.1:8000/api/health/
- Photos API: http://127.0.0.1:8000/api/photos/
- Contact API: http://127.0.0.1:8000/api/contact/

## Backend Commands

Run migrations:

```powershell
python backend/manage.py migrate
```

Run backend tests:

```powershell
python backend/manage.py test api
```

Start only the backend:

```powershell
python backend/manage.py runserver 127.0.0.1:8000
```

## Frontend Commands

Start only the frontend:

```powershell
npm --prefix frontend run dev
```

Create a production build:

```powershell
npm --prefix frontend run build
```

Preview the production build:

```powershell
npm --prefix frontend run preview
```

## Environment Variables

The app works with development defaults, but these values can be configured with environment files:

| Variable | File | Default | Description |
| --- | --- | --- | --- |
| `DJANGO_SECRET_KEY` | `.env` | development-only key | Secret key for local Django runs |
| `DJANGO_DEBUG` | `.env` | `true` | Enables Django debug mode |
| `DJANGO_ALLOWED_HOSTS` | `.env` | `localhost,127.0.0.1` | Comma-separated allowed hosts |
| `DJANGO_CORS_ALLOWED_ORIGINS` | `.env` | `http://localhost:5173,http://127.0.0.1:5173` | Comma-separated frontend origins |
| `VITE_API_URL` | `frontend/.env` | `http://127.0.0.1:8000/api` | Frontend API base URL |

## Notes

- `env/`, `node_modules/`, generated databases, and build output are ignored by git.
- Keep secrets in `.env`; do not commit real credentials.
- The unified launcher stops both services when you press `Ctrl+C`.
