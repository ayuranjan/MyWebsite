import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about-me'>How it works</Link>
            <Link to='/about-me'>Careers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact-me'>Contact</Link>
            <Link to='/contact-me'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Coding Handles</h2>
            <Link to='/hackerank'>HackerRank</Link>
            <Link to='/geek'>GeekForGeeks</Link>
            <Link to='/leet'>LeetCode</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
             AR
             <i class='fas fa-cat' />  
            </Link>
          </div>
          <small class='website-rights'>AYUSH RANJAN © 2021</small>
          <small class='website-rights'>ayushranjancr7@gmail.com</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/facebook'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/insta'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/twitter'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/linkedIn'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
