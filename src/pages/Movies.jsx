import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom'; 
import { fetchMovieByName } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  
  return <div>Movies</div>;
};

export default Movies;