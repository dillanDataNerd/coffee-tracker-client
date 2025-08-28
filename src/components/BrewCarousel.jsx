import Carousel from "react-bootstrap/Carousel";
import BrewCard from "./BrewCard";
import { Link } from "react-router-dom";

function BrewCarousel({
  brews = [],
  interval = 5000,
  wrap = true,
  controls = true,
  indicators = false,
}) {
  if (!brews.length) return null;

  const slides = [...brews];
  console.log(brews);

  return (
    <Carousel
      controls={controls}
      indicators={indicators}
      interval={interval}
      wrap={wrap}
      touch
      pause="hover"
      className="mb-4"
    >
      {slides.map((brew) => (
        <Carousel.Item key={brew.id}>
          <div className="d-flex flex-column align-items-center p-3">
            <BrewCard
              id={brew.id}
              method={brew.method}
              tastingNotes={brew.tastingNotes}
              rating={brew.rating}
              bean={brew.bean.name}
              date={brew.createdAt}
              imageUrl={brew.bean?.imageUrl}
            />
            <Link
              to={`/brews/new/${brew.id}`}
              className="btn btn-primary mt-3 w-100"
              style={{ maxWidth: 480 }}
            >
              Brew again
            </Link>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BrewCarousel;
