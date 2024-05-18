import React, { useContext, useState } from 'react';
import emptyImg from '../../style/icons/emptyImg.jpg';
import { FavButton } from '../buttons/FavButton';
import { MovieRating } from '../card-list-UI/MovieRating';
import { MainAppContext } from '../../context/mainAppContext';
import { genresData } from '../../assets/genresData';
import { MovieGenres } from '../card-list-UI/MovieGenres';

export const MoviesList = ({ movie }) => {
    const { favMovies, toFav } = useContext(MainAppContext);
    const movieGenres = movie.genre_ids ? genresData.filter(genre => movie.genre_ids.includes(genre.value)) : movie.genres
    const [isDescriptionHidden, setDescriptionHidden] = useState(false);
    return (
        <div className='movieList'>
            <button
                onMouseOver={() => setDescriptionHidden(true)}
                onMouseOut={() => setDescriptionHidden(false)}
                onClick={() => window.location.href = `/movie/${movie.id}`}>
                <img className='moviePoster' src={!movie.poster_path ? emptyImg : `https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`poster_${movie.title}`} />
                <div className={`movieListMovieDescription ${isDescriptionHidden ? 'movieListMovieDescription-show' : ''}`}>
                    <h4>{movie.overview ? movie.overview : '—'}</h4>
                </div>
            </button>

            <div className='movieListFooterInfo'>
                <h2>{movie.title}</h2>
                <MovieRating movieData={movie} />
                <FavButton favMovies={favMovies} movieData={movie} toFav={toFav} />
                <div className='movieGenres'>
                    {movieGenres.map((genre) => <MovieGenres key={genre.name} genreData={genre} />)}
                </div>
            </div>
        </div>
    );
};
