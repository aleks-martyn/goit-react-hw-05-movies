import PropTypes from 'prop-types';
import {
  MovieWrap,
  MovieInfoWrap,
  MovieTitle,
  MovieSubTitle,
  MovieText,
  MoreInfoWrap,
  LinksList,
  ListItem,
  StyledLink,
} from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;

  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w342/${poster_path}`
    : 'https://via.placeholder.com/342x513.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  return (
    <>
      <MovieWrap>
        <img src={posterUrl} alt={title} />
        <MovieInfoWrap>
          <MovieTitle>
            {title ?? 'Unknown'} ({releaseYear})
          </MovieTitle>
          <MovieText>User Score: {userScore}</MovieText>
          <MovieSubTitle>Overview</MovieSubTitle>
          <MovieText>{overview}</MovieText>
          {genres && genres.length > 0 && (
            <>
              <MovieSubTitle>Genres</MovieSubTitle>
              <MovieText>{genres.map(({ name }) => name).join(', ')}</MovieText>
            </>
          )}
        </MovieInfoWrap>
      </MovieWrap>

      <MoreInfoWrap>
        <MovieSubTitle>Additional information</MovieSubTitle>
        <LinksList>
          <ListItem>
            <StyledLink to="cast">Cast</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </LinksList>
      </MoreInfoWrap>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;
