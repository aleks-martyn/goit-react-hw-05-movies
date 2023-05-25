import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovieByName } from 'services/api';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import {
  StyledSection,
  List,
  ListItem,
  StyledLink,
} from 'components/MovieList/MovieList.styled';

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

        if (results && results.length === 0) {
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
    setMovies([]);
  };

  return (
    <main>
      <StyledSection>
        <SearchMovies onSubmit={handleSubmit} />
        {movies && movies.length > 0 ? (
          <List>
            {movies.map(({ id, title }) => (
              <ListItem key={id}>
                <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </StyledLink>
              </ListItem>
            ))}
          </List>
        ) : (
          <h4>Nothing was found for this query.</h4>
        )}
      </StyledSection>
    </main>
  );
};

export default Movies;
