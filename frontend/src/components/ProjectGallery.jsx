import { ArrowRight, Download, Heart, Share2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { portfolioCategories, projects } from "../data/portfolio";

const apiUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

function mergeApiData(localProjects, apiProjects) {
  if (!Array.isArray(apiProjects)) {
    return localProjects;
  }

  const apiById = new Map(apiProjects.map((item) => [item.id, item]));

  return localProjects.map((project) => ({
    ...project,
    ...apiById.get(project.id),
    cover: project.cover,
    gallery: project.gallery,
  }));
}

function ProjectGallery({ compact = false }) {
  const [searchParams] = useSearchParams();
  const projectParam = searchParams.get("project");
  const [activeCategory, setActiveCategory] = useState("All");
  const [portfolioProjects, setPortfolioProjects] = useState(projects);
  const [selectedProjectId, setSelectedProjectId] = useState(projectParam || projects[0].id);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`${apiUrl}/photos/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load portfolio metadata");
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setPortfolioProjects(mergeApiData(projects, data.results));
        }
      })
      .catch(() => {
        if (isMounted) {
          setPortfolioProjects(projects);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (projectParam && projects.some((project) => project.id === projectParam)) {
      setSelectedProjectId(projectParam);
    }
  }, [projectParam]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioProjects;
    }

    return portfolioProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory, portfolioProjects]);

  useEffect(() => {
    if (!filteredProjects.some((project) => project.id === selectedProjectId)) {
      setSelectedProjectId(filteredProjects[0]?.id || portfolioProjects[0]?.id || projects[0].id);
    }
  }, [filteredProjects, selectedProjectId, portfolioProjects]);

  const selectedProject =
    portfolioProjects.find((project) => project.id === selectedProjectId) ||
    filteredProjects[0] ||
    portfolioProjects[0];

  const visibleProjects = compact ? filteredProjects.slice(0, 4) : filteredProjects;

  return (
    <div className="gallery-experience">
      <div className="category-tabs" role="tablist" aria-label="Project categories">
        {portfolioCategories.map((category) => (
          <button
            className={activeCategory === category ? "is-active" : ""}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-layout">
        <article className="project-feature" aria-live="polite">
          <div className="project-feature-image">
            <button
              type="button"
              onClick={() => setLightboxImage(selectedProject.cover)}
              aria-label={`Open ${selectedProject.title} cover image`}
            >
              <img src={selectedProject.cover} alt={selectedProject.title} />
            </button>
          </div>
          <div className="project-feature-copy">
            <span>{selectedProject.category}</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{selectedProject.location}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{selectedProject.year}</dd>
              </div>
              <div>
                <dt>Gallery</dt>
                <dd>{selectedProject.gallery.length} images</dd>
              </div>
            </dl>
            <Link className="text-link" to="/booking">
              Plan a Similar Session
              <ArrowRight size={16} strokeWidth={1.7} />
            </Link>
          </div>
        </article>

        <div className="gallery-grid" aria-label="Project gallery">
          {visibleProjects.map((project) => (
            <button
              className={`gallery-tile gallery-${project.layout} ${
                project.id === selectedProjectId ? "is-selected" : ""
              }`}
              type="button"
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
            >
              <img src={project.cover} alt={project.title} />
              <span>
                <small>{project.category}</small>
                <strong>{project.title}</strong>
              </span>
            </button>
          ))}
        </div>
      </div>

      {!compact && (
        <div className="story-strip" aria-label={`${selectedProject.title} image set`}>
          {selectedProject.gallery.map((image, index) => (
            <button
              type="button"
              key={`${selectedProject.id}-${image}-${index}`}
              onClick={() => setLightboxImage(image)}
              aria-label={`Open ${selectedProject.title} image ${index + 1}`}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}

      {compact && (
        <Link className="button button-secondary gallery-more" to="/projects">
          Explore All Projects
          <ArrowRight size={18} strokeWidth={1.7} />
        </Link>
      )}

      {lightboxImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Selected project image">
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image preview"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
          <img src={lightboxImage} alt="" />
          <div className="lightbox-actions" aria-label="Preview actions">
            <button type="button" aria-label="Save favorite">
              <Heart size={18} strokeWidth={1.7} />
            </button>
            <button type="button" aria-label="Download sample">
              <Download size={18} strokeWidth={1.7} />
            </button>
            <button type="button" aria-label="Share sample">
              <Share2 size={18} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
