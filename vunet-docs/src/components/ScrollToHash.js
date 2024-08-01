import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');

      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If the element is not found, try again in a short while
          setTimeout(scrollToElement, 100);
        }
      };

      scrollToElement();
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
