// StarRating.js
import React, { useEffect } from "react";
import "./StarRating.css";

const StarRating = () => {
  useEffect(() => {
    const stars = document.querySelectorAll(".stars i");
    stars.forEach((star, index1) => {
      star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
          index1 >= index2
            ? star.classList.add("active")
            : star.classList.remove("active");
        });
      });
    });
  }, []);

  return (
    <body className="star-body">
      <div className="star-rating-box">
        <h3>Dynamic Star Rating</h3>
        <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    </body>
  );
};

export default StarRating;
