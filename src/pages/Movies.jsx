import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Spinner from 'components/Loader';
import { fetchMovieByName } from 'services/api';
import SearchMovies from 'components/SearchMovies';
import {
  StyledSection,
  List,
  ListItem,
  StyledLink,
  NotFoundText,
} from 'components/MovieList/MovieList.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    setStatus('pending');
    const getMovie = async query => {
      try {
        const { results } = await fetchMovieByName(query);
        setMovies(results);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    getMovie(query);
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
    setMovies([]);
    setError(null);
    setStatus('idle');
  };

  return (
    <StyledSection>
      <SearchMovies onSubmit={handleSubmit} />
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && (
        <List>
          {movies && movies.length === 0 && (
            <NotFoundText>Nothing was found for this query.</NotFoundText>
          )}
          {movies.map(({ id, title }) => (
            <ListItem key={id}>
              <StyledLink to={`${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      )}
    </StyledSection>
  );
};

export default Movies;
