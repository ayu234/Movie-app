// src/components/MoviePosterDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '7704cc7f';

const MoviePosterDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <div className="movie-details">
      {movie ? (
        <React.Fragment>
          <img src={movie.Poster} alt={movie.Title} />
          <h2 className="white">{movie.Title}</h2>
          <p className="white detail-para">{movie.Plot}</p>
          <p className="white">Rating: {movie.imdbRating}</p>
        </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviePosterDetails;
