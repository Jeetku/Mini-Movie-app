import React, { useState } from "react";
import "../styles/Movie.css";
import MovieDetail from "./MovieDetail";
const Movie = ({ title, poster, year }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    return setShowModal(false);
  };
  return (
    <div className="movie">
      <button className="model-btn" onClick={() => setShowModal(true)}>
        Open Movies
      </button>

      {showModal && <MovieDetail closeModal={closeModal} />}
      <img src={poster} alt="movie" />
      <p>Title: {title} </p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Movie;
