import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return <MovieList trendingMovies={trendingMovies} />;
};

export default Home;
