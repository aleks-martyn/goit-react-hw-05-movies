import PropTypes from 'prop-types';
import { StyledSection, SectionTitle, List, ListItem, StyledLink } from './MovieList.styled';

const MovieList = ({ trendingMovies }) => (
  <StyledSection>
    <SectionTitle>Trending today</SectionTitle>
    <List>
      {trendingMovies &&
        trendingMovies.map(trendingMovie => (
          <ListItem key={trendingMovie.id}>
            <StyledLink to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </StyledLink>
          </ListItem>
        ))}
    </List>
  </StyledSection>
);

export default MovieList;

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
