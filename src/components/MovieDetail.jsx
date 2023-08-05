import React, { useEffect } from "react";

const MovieDetail = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h1>Stay Tuned</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor
          pariatur iusto labore cumque laboriosam nesciunt quaerat ut non atque
          voluptas culpa eum quasi, ex, magnam adipisci ab excepturi saepe?
        </p>
        <button className="model-btn" onClick={closeModal}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
