import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import Spinner from 'components/Loader';
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
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async movieId => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && (
        <Wrap>
          <CastTitle>Cast</CastTitle>
          {cast.length ? (
            <CastList>
              {cast.map(({ id, profile_path, name, character }) => (
                <CastListItem key={id}>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                      alt={`${name}`}
                    />
                  ) : (
                    <img
                      src={`https://via.placeholder.com/185x278?text=No+Image`}
                      alt={`${name}`}
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
      )}
    </>
  );
};

export default Cast;
