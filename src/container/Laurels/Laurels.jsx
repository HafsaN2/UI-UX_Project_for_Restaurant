import React from 'react';

import {SubHeading } from '../../components';
import { images, data } from '../../constants';

import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="app__irish_grover" style={{ color: '#F3E7D7'}}>{title}</p>
      <p className="app__cor_morant">{subtitle}</p>
      </div>
  </div>
);

const Laurels = () => (
  <div className= "app__laurels app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
        <p className="app__subheading" />
      <h1 className="app__irishgrover">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.pavibhaji} alt="pavibhaji" />
    </div>
    <div className="app__logo_img">
      <img src={images.logo} alt="logo" />
    </div>
  </div>
);

export default Laurels;
