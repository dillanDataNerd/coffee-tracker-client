// BrewCarousel.jsx
import Carousel from "react-bootstrap/Carousel";
import BrewCard from "./BrewCard";

// Ensure you have Bootstrap CSS once in your app entry file (e.g., main.jsx):
// import "bootstrap/dist/css/bootstrap.min.css";

function BrewCarousel({
  brews = [],
  autoPlay = true,
  interval = 5000,
  wrap = true,
  controls = true,
  indicators = true,
}) {
  if (!brews.length) return null;

  const slides = [...brews]
  console.log(brews)

  return (
    <Carousel
      controls={controls}
      indicators={indicators}
      interval={autoPlay ? interval : null} // null disables auto cycle
      wrap={wrap}
      touch
      pause="hover"
      className="mb-4"
    >
      {slides.map((brew) => (
        <Carousel.Item key={brew.id}>
          <div className="d-flex justify-content-center p-3">
            <BrewCard
              id={brew.id}
              method={brew.method}
              tastingNotes={brew.tastingNotes}
              rating={brew.rating}
              bean={brew.bean.name}
              date={brew.createdAt}
              imageUrl={brew.bean?.imageUrl}
            />
          </div>


        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BrewCarousel;
