import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const API_KEY = '7704cc7f';

const MoviePoster = () => {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=action&type=movie&plot=short&r=json&totalResults=5`
      )
      .then((response) => setMovies(response.data.Search))
      .catch((error) => console.error(error));

    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
      .then((response) => setTrending(response.data.Search))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="poster-container">
      {/* Container for posters */}
      <div>
        <h1 className="white">Trending Now</h1>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-thumbnail">
              <Link to={`/movie/details/${movie.imdbID}`}>
                <div className="thumbnail-inner">
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-5">
        <h1 className="white">Award Wining</h1>
        <Slider {...settings}>
          {trending.map((movie) => (
            <div key={movie.imdbID} className="movie-thumbnail">
              <Link to={`/movie/details/${movie.imdbID}`}>
                <div className="thumbnail-inner">
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MoviePoster;
