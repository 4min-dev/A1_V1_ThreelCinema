import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetFullMovieInfo } from '../post/GetFullMovieInfo';
import { Header } from '../UI/Header';
import { ContentPreloader } from '../UI/ContentPreloader';
import { ErrorMessage } from '../UI/ErrorMessage';
import { MoviePageHeading } from '../UI/full-movie-page-UI/MoviePageHeading';
import { MoviePageVideosSection } from './sections/MoviePageVideosSection';
import { MoviePageActorsSection } from './sections/MoviePageActorsSection';
import { MoviePageReviewsSection } from './sections/MoviePageReviewsSection';
import { Footer } from '../UI/Footer';

export const FullMoviePage = () => {
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [fullMovieData, setFullMovieData] = useState({});
  const [fullMovieVideos, setMovieVideosData] = useState([]);
  const [trailerData, setTrailerData] = useState([]);
  const params = useParams();

  useEffect(() => {
    GetFullMovieInfo(
      setLoading,
      setErrorMessage,
      setFullMovieData,
      setMovieVideosData,
      setTrailerData,
      params.id
    );
  }, []);

  const [limitMovieVideos, setLimitMovieVideos] = useState(4);
  const paginatedMovies = fullMovieVideos.slice(0, limitMovieVideos);

  return (
    <div className="moviePageMainContainer">
      <Header />
      {isLoading ? (
        <ContentPreloader />
      ) : errorMessage ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <>
          <MoviePageHeading fullMovieData={fullMovieData} trailerData={trailerData} />
          <MoviePageVideosSection
            fullMovieVideos={fullMovieVideos}
            paginatedMovies={paginatedMovies}
            limitMovieVideos={limitMovieVideos}
            setLimitMovieVideos={setLimitMovieVideos}
          />
          <MoviePageActorsSection movieId={fullMovieData.id} />
          <MoviePageReviewsSection movieId={fullMovieData.id} />
        </>
      )}
      {!isLoading && <Footer/>}
    </div>
  );
};
