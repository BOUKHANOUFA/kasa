import React from "react";
import "./Rating.css";

const Rating = ({ rate }) => {
  const ratingValue = Number(rate);

  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < ratingValue ? "star-full" : "star-empty"}
        >
          {index < ratingValue ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default Rating;
