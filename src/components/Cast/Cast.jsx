import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { Wrap, CastTitle, CastList, CastListItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <Wrap>
      <CastTitle>Cast</CastTitle>
      <CastList>
        {cast.map(({ id, profile_path, name, character }) => (
          <CastListItem key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={`${name} profile`}
              />
            ) : (
              <img
                src={`https://via.placeholder.com/200x300?text=No+Image`}
                alt={`${name} profile`}
              />
            )}
            <div>
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </div>
          </CastListItem>
        ))}
      </CastList>
    </Wrap>
  );
};

export default Cast;
