import { useState } from "react";
import "./Slideshow.css";
import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

function Carousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    if (currentSlide === pictures.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(pictures.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <div className="carousel">
      <img
        className="carousel-image"
        src={pictures[currentSlide]}
        alt="image de l'appartement"
      />

      <img
        className="arrow arrow-left"
        src={leftArrow}
        onClick={prevSlide}
        alt="précédent"
      />

      <img
        className="arrow arrow-right"
        src={rightArrow}
        onClick={nextSlide}
        alt="suivant"
      />
    </div>
  );
}

export default Carousel;