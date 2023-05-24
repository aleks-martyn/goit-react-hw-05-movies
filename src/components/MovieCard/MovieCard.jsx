import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieWrap,
  MovieInfoWrap,
  MovieTitle,
  MovieSubTitle,
  MovieText,
  MoreInfoWrap,
  StyledLink,
} from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const location = useLocation();

  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  return (
    <>
      <MovieWrap>
        <img src={posterUrl} alt={`${title}`} />
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
              <MovieText>
                {genres.map(genre => genre.name).join(', ')}
              </MovieText>
            </>
          )}
        </MovieInfoWrap>
      </MovieWrap>

      <MoreInfoWrap>
        <MovieSubTitle>Additional information</MovieSubTitle>
        <ul>
          <li>
            <StyledLink
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </StyledLink>
          </li>
        </ul>
      </MoreInfoWrap>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;
