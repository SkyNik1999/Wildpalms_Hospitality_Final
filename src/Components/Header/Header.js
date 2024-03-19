import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [atHome, setAtHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
      const scrollPosition = window.scrollY;
      const sections = ['home', 'popular', 'value', 'contact']; // Add more section IDs if needed

      // Determine which section is currently in view
      let activeSection = ''; // Default active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 0 && bottom > 0) {
            activeSection = section;
            break;
          }
        }
      }

      setActiveTab(activeSection);
    };

    setAtHome(location.pathname === '/' || location.pathname === '/home');

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleClick = tabId => {
    const element = document.getElementById(tabId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTab(tabId); // Set active tab here
    }
  };

  return (
    <div>
      <header
        className={`header ${scrolled || !atHome ? 'scroll-header' : ''}`}
        id="header"
      >
        <nav className="nav container">
          <Link
            to={'/'}
            onClick={() => handleClick('home')}
            className="nav__logo"
          >
            Wildpalms Hospitality <i className="bx bxs-home-alt-2"></i>
          </Link>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item" onClick={() => handleClick('home')}>
                <Link
                  to={'/'}
                  className={`nav__link ${
                    activeTab === 'home' ? 'active-link' : ''
                  }`}
                >
                  <i className="bx bx-home-alt-2"></i>
                  <span>Home</span>{' '}
                </Link>
              </li>
              <li className="nav__item" onClick={() => handleClick('popular')}>
                <Link
                  to={'/'}
                  className={`nav__link ${
                    activeTab === 'popular' ? 'active-link' : ''
                  }`}
                >
                  <i className="bx bx-building-house"></i>
                  <span>Properties</span>
                </Link>
              </li>
              <li className="nav__item" onClick={() => handleClick('value')}>
                <Link
                  to={'/'}
                  className={`nav__link ${
                    activeTab === 'value' ? 'active-link' : ''
                  }`}
                >
                  <i className="bx bx-award"></i>
                  <span>Services</span>
                </Link>
              </li>
              <li className="nav__item" onClick={() => handleClick('contact')}>
                <Link
                  to={'/'}
                  className={`nav__link ${
                    activeTab === 'contact' ? 'active-link' : ''
                  }`}
                >
                  <span>Contact</span>
                  <i className="bx bx-phone"></i>
                </Link>
              </li>
            </ul>
          </div>

          <span
            className="nav__button button"
            onClick={() => handleClick('subscribe')}
            style={{ marginLeft: '1rem' }}
          >
            Join US
          </span>
        </nav>
      </header>
    </div>
  );
};

export default Header;
