import React from 'react';
import "./footer.css";
import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Harsh</h1>
            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#certificates" className="footer__link">Certifications</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/harshkag22/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiInstagram />
                </a>
                <a href="https://github.com/kagHarsh" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/harsh-kag-163182155/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;