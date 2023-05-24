import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import MovieCard from 'components/MovieCard/MovieCard';
import { Container, Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>
        <Link to={location?.state?.from ?? '/'}>
          <Button type='button'>Go back</Button>
        </Link>

        <MovieCard movie={selectedMovie} />
      </Container>
    </main>
  );
};

export default MovieDetails;
