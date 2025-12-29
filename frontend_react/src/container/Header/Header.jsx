import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { client } from '../../client';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
  },
};


const Header = () => {
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    const query = '*[_type == "resume"][0] { "url": resumeFile.asset->url }';

    client.fetch(query).then((data) => {
      if (data && data.url) {
        setResumeUrl(data.url);
      }
    });
  }, []);

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='tag-cmp app__flex'>
            <p className='p-text '>DOWNLOAD RESUME</p>
            {resumeUrl && (
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="p-text" style={{ marginTop: '10px', textDecoration: 'none', backgroundColor: '#313BAC', color: '#fff', padding: '0.5rem 1rem', borderRadius: '10px' }}>
                CLICK HERE
              </a>
            )}
          </div>
        </div>
      </motion.div >

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* BIG CIRCLE */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          src={images.circle}
          className="overlay_circle"
        />

        {/* BIG NAME INSIDE CIRCLE */}
        <motion.div
          className='app__header-name'
        initial={{ scale: 0.9 }} // Small size initially
        animate={{ scale: [1.2, 1] }} // Animation effect
        transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
        >
          <div className='text__container'>
            <span className='s-span'>👋</span>
            <p className='p-name'>Hello, I am</p>
            <h1 className='h-name'>Subarna Budhathoki</h1>
          </div>
        </motion.div>
      </motion.div>

      {/* Three circle logos */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div >
  );
};

export default AppWrap(
  MotionWrap(Header, 'app__header'),
  'home',
  "app__primarybg"
);

