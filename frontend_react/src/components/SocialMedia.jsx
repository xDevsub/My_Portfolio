import React, { useState, useEffect } from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { client } from '../client';

const SocialMedia = () => {
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    const query = '*[_type == "socialMedia"]';

    client.fetch(query)
      .then((data) => {
        // Convert array to object with platform as key
        const links = {};
        data.forEach(item => {
          links[item.platform.toLowerCase()] = item.url;
        });
        setSocialLinks(links);
      })
      .catch((err) => console.error('Failed to fetch social media:', err));
  }, []);

  // Default social media platforms to always show
  const socialPlatforms = [
    { platform: 'twitter', icon: <BsTwitter /> },
    { platform: 'facebook', icon: <FaFacebookF /> },
    { platform: 'instagram', icon: <BsInstagram /> }
  ];

  return (
    <div className='app__social'>
      {socialPlatforms.map((social, index) => (
        <div key={index}>
          <a 
            href={socialLinks[social.platform] || '#'} 
            target="_blank" 
            rel="noreferrer"
            onClick={(e) => !socialLinks[social.platform] && e.preventDefault()}
          >
            {social.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
