import { useParams } from 'react-router-dom';
import { fetchCast } from '../../Pages/common/Services/apiService';
import { useState, useEffect } from 'react';
import { List, Li } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  //Facem o solicitare de fiecare dată când se schimbă movieId
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

  //Link către poza actor
  const defaultActorImg =
    'https://hanover-twp.org/images/uploads/10-07-2019_9-53-26_official-icon.jpg';

  return (
    <div>
      {!cast.length && <p>No cast information for this movie...</p>}
      <List>
        {cast.map(actor => {
          return (
            <Li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultActorImg
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </Li>
          );
        })}
      </List>
    </div>
  );
};
