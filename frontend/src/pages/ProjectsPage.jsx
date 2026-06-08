import ProjectGallery from "../components/ProjectGallery";

function ProjectsPage() {
  return (
    <>
      <section className="page-hero projects-hero">
        <div className="page-hero-copy">
          <span className="section-label">Projects</span>
          <h1>Selected projects, dynamic galleries, and client-ready stories.</h1>
          <p>
            Filter the work by category, select a project, and open images into a focused gallery preview.
          </p>
        </div>
      </section>

      <section className="section-shell projects-page-section">
        <ProjectGallery />
      </section>
    </>
  );
}

export default ProjectsPage;
