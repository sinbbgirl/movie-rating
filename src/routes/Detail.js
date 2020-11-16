import React, { Component } from "react";
import "./Detail.css";

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    console.log(location);
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      let url = `https://youtu.be/${location.state.trailer}`;
      let trailerAvailable = 'No Trailer Available';
      if (location.state.trailer !== '') {
        trailerAvailable = (
          <a href={url} target='blank'>
            🎞<span>Watch Trailer Now</span>🎞
          </a>
        );
      }
      return (
        <div className='container mt-3'>
          <div className='detail_movie'>
            <img
              src={location.state.poster}
              alt={location.state.title}
              title={location.state.title}
            />
            <div className='detail_movie_data'>
              <h3 className='detail_movie_title'>{location.state.title}</h3>
              <h5 className='detail_movie_year'>
                {location.state.year} / ⭐{location.state.rating}/10
              </h5>
              <ul className='detail_movie_genres'>
                {location.state.genres.map((genre, index) => (
                  <li className='detail_genres_genre' key={index}>
                    {genre}
                  </li>
                ))}
              </ul>
              <p className='detail_movie_summary'>{location.state.summary}</p>
              <p className='noTrailer'>{trailerAvailable}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
