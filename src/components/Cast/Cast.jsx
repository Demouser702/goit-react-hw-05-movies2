import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from '../../Pages/common/Services/apiService';
import './Cast.module.css'; // Import the CSS file

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;
      try {
        const data = await fetchCast(movieId);
        setCast([...data.cast]);
      } catch (error) {
        console.log('Error', error.message);
      }
    };
    fetchData();
  }, [movieId]);

  const defaultActorImg =
    'https://hanover-twp.org/images/uploads/10-07-2019_9-53-26_official-icon.jpg';

  return (
    <div>
      {!cast.length && <p>No cast information for this movie...</p>}
      <ul className="cast-list">
        {cast.map(actor => {
          return (
            <li key={actor.id} className="cast-item">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultActorImg
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
