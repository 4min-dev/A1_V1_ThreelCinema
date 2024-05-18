import React, { useEffect, useState } from 'react';
import { GetMovieReviews } from '../../post/GetMovieReviews';
import { ContentPreloader } from '../../UI/ContentPreloader';
import { ErrorMessage } from '../../UI/ErrorMessage';
import { NotFound } from '../../UI/NotFound';
import { PaginateButtons } from '../../UI/paginate-UI/PaginateButtons';
import { ReviewList } from '../../UI/card-list/ReviewList';
import { ReviewsStat } from '../../UI/full-movie-page-UI/ReviewsStat';

export const MoviePageReviewsSection = ({ movieId }) => {
    const [isLoading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [reviewsData, setReviewsData] = useState([]);
    const [paginateFilters, setPaginateFilters] = useState({ currPage: 1, totalPages: null });

    useEffect(() => {
        GetMovieReviews(setLoading, setErrorMessage, setReviewsData, setPaginateFilters, paginateFilters, movieId);
    }, [paginateFilters.currPage]);

    return (
        <div className='moviePageReviewsSectionContainer'>
            {isLoading ? (
                <ContentPreloader />
            ) : errorMessage ? (
                <ErrorMessage errorMessage={errorMessage} />
            ) : (
                <>
                    <h1>Reviews</h1>
                    <div className="moviePageReviewsSectionMainContent">
                        <div className="reviewsContainer">
                            {reviewsData.length > 0 
                            ?
                                <>
                                    <ReviewsStat reviewsData={reviewsData} />
                                    {reviewsData.map((reviewData) => (
                                        <ReviewList key={reviewData.id} reviewData={reviewData} />
                                    ))}
                                    <PaginateButtons globalPaginateFilters={paginateFilters} setPaginateFilters={setPaginateFilters} movieData={reviewsData} />
                                </>
                            : 
                                <NotFound errorMessage='No reviews found' />}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
