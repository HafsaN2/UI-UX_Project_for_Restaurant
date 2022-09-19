import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__chef app__wrapper section__padding" id="chef">
    <div className="app__wrapper-img">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__chef_info">
      <SubHeading title="Chef's Word" />
      <h1 className="app__headtext_cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="app__p_irishgrover">As someone who has traveled to different countries, I believe it is important to understand each culture.
          Coming from a Pakistani family, my family has combined cultures with the marriage to an Indian, where we have come to learn and share our cultures.</p>
        </div>   
        <p className="p__opensans"></p>
      </div>

      <div className="app__chef-sign">
        <p>Zubida Karim</p>
        <p className="app__p_opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
