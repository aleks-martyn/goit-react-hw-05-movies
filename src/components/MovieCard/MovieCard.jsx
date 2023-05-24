import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {MovieWrap, MoreInfoWrap, StyledLink } from './MovieCard.styled';

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
        <div>
          <h2>
            {title ?? 'Unknown'} ({releaseYear})
          </h2>
          <p>User Score: {userScore}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          {genres && genres.length > 0 && (
            <>
              <h3>Genres</h3>
              <p>{genres.map(genre => genre.name).join(', ')}</p>
            </>
          )}
        </div>
      </MovieWrap>

      <MoreInfoWrap>
        <h3>Additional information</h3>
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
