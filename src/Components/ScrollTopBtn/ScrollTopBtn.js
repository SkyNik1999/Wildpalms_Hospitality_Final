// TopScrollBtn.js

import React, { useEffect, useState } from 'react';
import { BsFillRocketFill } from 'react-icons/bs';
import './ScrollTopBtn.css';

const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Event listener for scrolling
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Show/hide the button based on the scroll position
      setIsVisible(scrollY > 20);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the document
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="scrollToTopBtn"
      className={isVisible ? 'visible' : 'hidden'}
      onClick={scrollToTop}
    >
      <BsFillRocketFill size={25} />
    </button>
  );
};

export default ScrollTopBtn;
