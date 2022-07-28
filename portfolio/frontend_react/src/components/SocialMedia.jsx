import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social" alt="loading">
    
    <div id="linkedin">
      <a href="https://www.linkedin.com/in/rahul-more-540b8b156/" target="_main">
        <BsLinkedin icon={BsLinkedin} />
      </a>
    </div>

    <div id="gihub">
      <a href="https://github.com/rahulmore01/" target="_main">
        <BsGithub icon={BsGithub} />
      </a>
    </div>

    <div id="instag">
      <a href="https://www.instagram.com/ig_rahulmore/" target="_main">
        <BsInstagram icon={BsInstagram} />
      </a>
    </div>
  </div>

);

export default SocialMedia;

