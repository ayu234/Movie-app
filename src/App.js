import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MoviePoster from './components/MoviePoster';
import MoviePosterDetails from './components/MoviePosterDetails';

import './App.scss';

const App = () => {
  return (
    <Router>
      <header className="poster-container">
        <img src="/logo.png" className="w-150 margin-1em" alt="logo" />
      </header>

      <Route exact path="/">
        <MoviePoster />
      </Route>
      <Route path="/movie/details/:movieId">
        <MoviePosterDetails />
      </Route>
    </Router>
  );
};

export default App;
