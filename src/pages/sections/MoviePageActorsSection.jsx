import React, { useEffect, useState } from 'react';
import { ContentPreloader } from '../../UI/ContentPreloader';
import { ErrorMessage } from '../../UI/ErrorMessage';
import { GetMovieActors } from '../../post/GetMovieActors';
import { ActorList } from '../../UI/card-list/ActorList';
import { MoreContentButton } from '../../UI/buttons/MoreContentButton';

export const MoviePageActorsSection = ({ movieId }) => {
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [actorsData, setActorsData] = useState([]);
  const [actorSectionHeight, setActorSectionHeight] = useState('800px');

  const setFullHeight = () => {
    actorSectionHeight !== '100%' ? setActorSectionHeight('100%') : setActorSectionHeight('800px');
  };

  useEffect(() => {
    GetMovieActors(setLoading, setErrorMessage, setActorsData, movieId);
  }, []);

  return (
    <div className="moviePageActorsSectionContainer">
      {isLoading ? (
        <ContentPreloader />
      ) : errorMessage ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : actorsData.length > 0 && (
        <div className="actorListContainer" style={{ height: actorSectionHeight }}>
          {actorsData.map((actorData) => (
            <ActorList key={actorData.id} actorData={actorData} />
          ))}
        </div>
      )}
      {actorsData.length > 5 && (
        <MoreContentButton
          moreFn={setFullHeight}
          buttonText={actorSectionHeight !== '100%' ? 'Show more..' : 'Show less..'}
          id={'fullSizeButtonActorsSection'}
        />
      )}
    </div>
  );
};
