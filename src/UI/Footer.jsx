import React from 'react'
import telegramLogo from '../style/logo/telegramLogo.png'
import githubLogo from '../style/logo/githubLogo.png'
import mailLogo from '../style/logo/mailLogo.jpg'

export const Footer = () => {
  return (
    <footer>
        <div className="footerInfoAboutWebsite">
            <h3>Threeless Cinema</h3>
            <h3>2024</h3>
        </div>
        <ul>
            <li>
                <a href='https://t.me/fomin_dev'>
                <img src={telegramLogo} alt='telegram'/>
                    <h4>@fomin_dev</h4>
                </a>
            </li>
            <li>
                <a href='https://github.com/4min-dev'>
                    <img src={githubLogo} alt='github'/>
                    <h4>4min-dev</h4>
                </a>
            </li>
            <li>
                <img src={mailLogo} alt='mail'/> <h4>sadge.rondo@gmail.com</h4>
            </li>
        </ul>
    </footer>
  )
}