import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //  used to render the button only when we open it not everytime we refresh it 
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            AR
            <i class='fas fa-cat' />  
            {/* taken from font awesome webiste   added css scheet in index.js file */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* this if for mobile app when we click on cross in menu it disappears  */}
            <li className='nav-item'>
              <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/blogs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to='/contact-me'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
