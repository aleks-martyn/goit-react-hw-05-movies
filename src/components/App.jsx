import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />

    <Route path="/movies/:movieId" element={<MovieDetails />} />
  </Routes>
);

export default App;
