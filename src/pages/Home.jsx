import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setStatus('pending');
        const { results } = await fetchTrendMovies();
          setTrendingMovies(results);
          setStatus('resolved');
      } catch (error) {
          setError(error);
          setStatus('rejected');
      } 
    };

    fetchTrendingMovies();
  }, []);

  return <MovieList trendingMovies={trendingMovies} />;
};

export default Home;
