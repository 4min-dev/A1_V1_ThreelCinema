import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { MainAppContext } from '../context/mainAppContext';
import favNotSelected from '../style/icons/favNotSelected.png';
import favSelected from '../style/icons/favSelected.png';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollToPlugin)

export const Header = () => {
  const { isFavPopup, setFavPopup } = useContext(MainAppContext)

  const scrollToSection = (sectionId) => {
    gsap.to(window,{duration:.7,scrollTo:`#${sectionId}`})
  }
  

useEffect(() => {
  if(document.querySelector('.headerContainer')) {
    window.addEventListener('scroll', () => {
      const headerContainer = document.querySelector('.headerContainer');
      const scrollPosition = window.scrollY;
    
      if (scrollPosition > 160) {
        headerContainer.classList.add('header-show');
      } else {
        headerContainer.classList.remove('header-show');
      }
    });
  }
},[])

  return (
    <div className="headerContainer">
        <header>
        <div className="headerHomeLink">
            <a href='/'><h3>Home</h3></a>
        </div>
        <ul>
            <li><Link to='/' onClick={() => scrollToSection('startedSection')}><h3>Most Popular</h3></Link></li>
            <li><Link to='/' onClick={() => scrollToSection('moviesSection')}><h3>Movies</h3></Link></li>
        </ul>
        <div className="favMoviesButtContainer">
            <div className="favMoviesButtContent">
                <button type='button' onClick={() => setFavPopup(!isFavPopup)}>
                    <img src={!isFavPopup ? favNotSelected : favSelected} alt='favMoviesPopupButton'/>
                </button>
            </div>
        </div>
    </header>
    </div>
    
  )
}