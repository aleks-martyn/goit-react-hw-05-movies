import PropTypes from 'prop-types';
import {
  StyledSection,
  SectionTitle,
  List,
  ListItem,
  StyledLink,
} from './MovieList.styled';

const MovieList = ({ trendingMovies }) => (
  <StyledSection>
    <SectionTitle>Trending today</SectionTitle>
    <List>
      {trendingMovies &&
        trendingMovies.map(({id, title}) => (
          <ListItem key={id}>
            <StyledLink to={`/movies/${id}`}>
              {title}
            </StyledLink>
          </ListItem>
        ))}
    </List>
  </StyledSection>
);

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
