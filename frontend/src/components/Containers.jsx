import { useEffect, useMemo, useState } from "react";
import { portfolioCategories, works } from "../data/portfolio";


const apiUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";


function mergeApiData(localWorks, apiWorks) {
  if (!Array.isArray(apiWorks)) {
    return localWorks;
  }

  const apiById = new Map(apiWorks.map((item) => [item.id, item]));

  return localWorks.map((work) => ({
    ...work,
    ...apiById.get(work.id),
    image: work.image,
  }));
}


function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(works[0].id);
  const [portfolioWorks, setPortfolioWorks] = useState(works);

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
          setPortfolioWorks(mergeApiData(works, data.results));
        }
      })
      .catch(() => {
        if (isMounted) {
          setPortfolioWorks(works);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredWorks = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioWorks
        : portfolioWorks.filter((work) => work.category === activeCategory),
    [activeCategory, portfolioWorks],
  );

  useEffect(() => {
    if (!filteredWorks.some((work) => work.id === selectedId)) {
      setSelectedId(filteredWorks[0]?.id || works[0].id);
    }
  }, [filteredWorks, selectedId]);

  const selectedWork =
    portfolioWorks.find((work) => work.id === selectedId) || portfolioWorks[0];

  return (
    <section className="portfolio-section section-shell" id="portfolio">
      <div className="section-heading split-heading">
        <div>
          <span className="section-kicker">Portfolio</span>
          <h2>Selected work. Real moments, artfully made.</h2>
        </div>
        <p>
          Browse portrait, editorial, commercial, and event stories shaped with
          intentional light and a calm production style.
        </p>
      </div>

      <div className="category-tabs" role="tablist" aria-label="Portfolio categories">
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

      <div className="work-grid">
        {filteredWorks.map((work) => (
          <button
            className={`work-tile work-${work.layout} ${
              selectedId === work.id ? "is-selected" : ""
            }`}
            type="button"
            key={work.id}
            onClick={() => setSelectedId(work.id)}
          >
            <img src={work.image} alt={work.title} />
            <span className="work-tile-overlay">
              <small>{work.category}</small>
              <strong>{work.title}</strong>
            </span>
          </button>
        ))}
      </div>

      <article className="featured-work" aria-live="polite">
        <div className="featured-copy">
          <span className="section-kicker">Selected Project</span>
          <h3>{selectedWork.title}</h3>
          <p>{selectedWork.description}</p>
          <dl>
            <div>
              <dt>Category</dt>
              <dd>{selectedWork.category}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{selectedWork.location}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{selectedWork.year}</dd>
            </div>
          </dl>
        </div>
        <div className="featured-image">
          <img src={selectedWork.image} alt="" />
        </div>
      </article>
    </section>
  );
}

export default Portfolio;
