import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/api';
import MovieList from 'components/MovieList';
import Spinner from 'components/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
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

  return (
    <>
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && <MovieList trendingMovies={trendingMovies} />}
    </>
  );
};

export default Home;
