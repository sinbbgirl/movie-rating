import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres, trailer, rating }) {
  return (
    <div className='movie'>
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            id,
            year,
            title,
            summary,
            poster,
            genres,
            trailer,
            rating
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className='movie_data'>
          <h3 className='movie_title'>{title}</h3>
          <h5 className='movie_year'>{year}  /  ⭐{rating}/10</h5>
          <ul className='movie_genres'>
            {genres.map((genre, index) => (
              <li className='genres_genre' key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <p className='movie_summary'>{summary.slice(0, 140)}...</p>
          <span>🎞<b>Click to See Detail</b>🎞</span>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
