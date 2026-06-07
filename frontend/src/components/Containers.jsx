import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import "./Containers.css";


const photos = [
  {
    src: img1,
    title: "Editorial Portraits",
    category: "Portrait",
  },
  {
    src: img2,
    title: "Lifestyle Stories",
    category: "Lifestyle",
  },
  {
    src: img3,
    title: "Brand Details",
    category: "Commercial",
  },
];

const apiUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";


const ImageContainers = () => {
  const [photoCards, setPhotoCards] = useState(photos);

  useEffect(() => {
    let isMounted = true;

    fetch(`${apiUrl}/photos/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load photos");
        }
        return response.json();
      })
      .then((data) => {
        if (!isMounted || !Array.isArray(data.results)) {
          return;
        }

        setPhotoCards(
          photos.map((photo, index) => ({
            ...photo,
            title: data.results[index]?.title || photo.title,
            category: data.results[index]?.category || photo.category,
          })),
        );
      })
      .catch(() => {
        if (isMounted) {
          setPhotoCards(photos);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Photography built around light, timing, and story.</h2>
        </div>
        <Row className="g-4">
          {photoCards.map((photo) => (
            <Col md={4} key={photo.title}>
              <article className="photo-card">
                <img src={photo.src} alt={photo.title} />
                <div className="photo-card-copy">
                  <span>{photo.category}</span>
                  <h3>{photo.title}</h3>
                </div>
              </article>
            </Col>
          ))}
        </Row>
        <div className="about-panel" id="about">
          <p className="eyebrow">About</p>
          <p>
            Izak&apos;s Photos is a focused portfolio for portraits, lifestyle shoots,
            and brand imagery. The site pairs a clean frontend with a Django API
            foundation that is ready to grow into bookings, galleries, and client
            delivery workflows.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ImageContainers;
