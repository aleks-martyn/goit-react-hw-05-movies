import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import {
  Wrap,
  CastTitle,
  CastList,
  CastListItem,
  CastInfo,
  CastName,
  NoCastText,
} from './Cast.styled';

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
      {cast.length ? (
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
              <CastInfo>
                <CastName>{name}</CastName>
                <p>Character: {character}</p>
              </CastInfo>
            </CastListItem>
          ))}
        </CastList>
      ) : (
        <NoCastText>
          We don't have any information about the cast yet.
        </NoCastText>
      )}
    </Wrap>
  );
};

export default Cast;
