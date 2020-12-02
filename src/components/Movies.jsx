import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movies(props) {
  const { id, year, title, summary, poster } = props;
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie-detail",
          state: {
            year,
            title,
            summary,
            poster,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__summary">{summary.slice(0, 180) + "..."}</p>
        </div>
      </Link>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movies;
