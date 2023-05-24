import { useState, useEffect } from "react";
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { fetchMovieById } from "services/api";
import MovieCard from "components/MovieCard/MovieCard";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});
  
  return <div>MovieDetails</div>;
};

export default MovieDetails;
