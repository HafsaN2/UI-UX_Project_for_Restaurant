import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.DE} alt="de letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__irishgrover">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="app__cormorantupright">As a blended family, we combine our home flavors to make our guests feel the Indian-Pakistani vibe</p>
        <button type="button" className="app__custom-button">Know More</button>
      </div>

      <div className="app__aboutus-content_utensils flex__center">
        <img src={images.utensils} alt="about_utensils" />
      </div>

        <div className="app__aboutus-content_history">
        <h1 className="headtext__irishgrover">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="app__cormorantupright">Ten years ago, our family combined two cultures together and this led to the blossum of impeccable taste</p>
        <button type="button" className="app__custom-button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
