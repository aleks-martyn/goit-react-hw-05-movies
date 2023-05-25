import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovieByName } from 'services/api';
import SearchMovies from 'components/SearchMovies/SearchMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);

        if (results.length === 0) {
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        console.log(error);
        setMovies([]);
      }
    };

    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return <div>Movies</div>;
};

export default Movies;
