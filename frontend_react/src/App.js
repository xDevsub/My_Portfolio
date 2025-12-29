import React, { useEffect } from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  useEffect(() => {
    const sections = ['home', 'about', 'work', 'skills', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Update URL without triggering scroll - use root path for home
          const url = sectionId === 'home' ? '/' : `#${sectionId}`;
          window.history.replaceState(null, null, url);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
