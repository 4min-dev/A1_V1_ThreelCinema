import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import anonUserImg from '../../style/logo/anonUserImg.png';

export const ReviewList = ({ reviewData }) => {
  const [reviewUploadData, setReviewUploadData] = useState({
    year: '',
    month: '',
    day: '',
    hours: '',
    minutes: '',
    seconds: ''
  });

  useEffect(() => {
    const dateTime = new Date(reviewData.created_at);

    const revYear = dateTime.getFullYear();
    const revMonth = dateTime.getMonth() < 10 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
    const revDay = dateTime.getDate() < 10 ? `0${dateTime.getDate()}` : dateTime.getDate();
    const revHours = dateTime.getHours() < 10 ? `0${dateTime.getHours()}` : dateTime.getHours();
    const revMinutes = dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();
    const revSeconds = dateTime.getSeconds() < 10 ? `0${dateTime.getSeconds()}` : dateTime.getSeconds();

    setReviewUploadData({
      year: revYear,
      month: revMonth,
      day: revDay,
      hours: revHours,
      minutes: revMinutes,
      seconds: revSeconds
    });
  }, []);

  const reviewListClass = `reviewList ${
    reviewData.author_details.rating !== null && 
    reviewData.author_details.rating >= 6.6 ? 'reviewHighRate' : ''} ${
    reviewData.author_details.rating !== null && 
    reviewData.author_details.rating <= 3.9 ? 'reviewLowRate' : ''}`;

    return (
      <div className={reviewListClass}>
        <div className="reviewListHeading">
          <img src={reviewData.author_details.avatar_path 
            ? `https://image.tmdb.org/t/p/w300${reviewData.author_details.avatar_path}` 
            : anonUserImg} alt='review_user_avatar'/>
          <h2>{reviewData.author}</h2>
        </div>
  
        <div className="reviewListReview">
        <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
          {reviewData.content}
          </Markdown>
        </div>
  
        <div className="reviewListFooter">
          <h4>{`
          ${reviewUploadData.month}.${reviewUploadData.day}.${reviewUploadData.year}
          ${reviewUploadData.hours}:${reviewUploadData.minutes}:${reviewUploadData.seconds}`}</h4>
        </div>
      </div>
    );
};
