import React, { useEffect, useState } from 'react';
import '../style/homePage.css'
import { Header } from '../UI/Header';
import { HomePageStartedSection } from './sections/HomePageStartedSection';
import { HomePageMoviesSection } from './sections/HomePageMoviesSection';
import { GetPopularMovies } from '../post/GetPopularMovies';
export const HomePage = () => {

let [popularMoviesError,setGlobalMessage] = useState('')
let [isPopularMoviesLoading,setPopularMoviesIsLoading] = useState(true)
let [popularMovies,setPopularMovies] = useState([])


useEffect(() => {

  if(document.querySelector('.homePageStartedSectionContent')) {
    window.addEventListener('scroll', () => {
      const homePageStartedSectionContent = document.querySelector('.homePageStartedSectionContent');
      const scrollPosition = window.scrollY;

      if (scrollPosition <= 150) {
        homePageStartedSectionContent.classList.add('homePageStartedSectionContent-show');
      } else {
        homePageStartedSectionContent.classList.remove('homePageStartedSectionContent-show');
      }
    });
  }

  GetPopularMovies(setPopularMoviesIsLoading,setPopularMovies,setGlobalMessage)
},[])

  return (
    <>
      <Header/>
      <HomePageStartedSection
        popularMovies={popularMovies} 
        popularMoviesError={popularMoviesError}
        isPopularMoviesLoading={isPopularMoviesLoading}/>
      <HomePageMoviesSection/>
    </>
  );
};