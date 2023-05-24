import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

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
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map(({ id, profile_path, name }) => (
          <li key={id}>
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
              <p></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
