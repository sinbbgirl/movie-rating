import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres, trailer }) {
  const temp = []
  temp.push({ trailer })
  const trailerAvailable = temp.map(code => {
    if (code.trailer === '') {
      return <p></p>
    } else {
      let url = `https://youtu.be/${code.trailer}`;
      return <a href={url} target='blank'>🎞<span>Watch Trailer Now</span>🎞</a>
    }
  })

  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title} />
      <div className='movie_data'>
        <h3 className='movie_title'>{title}</h3>
        <h5 className='movie_year'>{year}</h5>
        <ul className='movie_genres'>
          {genres.map((genre, index) => (
            <li className='genres_genre' key={index}>{genre}</li>
          ))}
        </ul>
        <p className='movie_summary'>{summary.slice(0, 140)}...</p>
        {trailerAvailable}
      </div>
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
