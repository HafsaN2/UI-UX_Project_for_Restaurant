import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits your Palatte" />
      <h1 className="headtext__irishgrover">Today's Specials</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_drink flex__center">
        <p className="app__specialMenu-menu_headings">Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drink, index) => (
            <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags}/>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.drinks_desserts} alt="drinksdesserts img" />
      </div>

      <div className="app__specialMenu-menu_dessert flex__center">
        <p className="app__specialMenu-menu_heading">Desserts</p>
        <div className="app__specialMenu_menu_items">
          {data.desserts.map((dessert, index) => (
            <MenuItem key={dessert.title + index} title={dessert.title} price={dessert.price} tags={dessert.tags}/>
          ))}
        </div>
      </div>
      <div style={{marginTop: '550px'}}>
        <button type="button" className="app__custom-button">View More</button>
        </div>
      </div>
  </div>
);

export default SpecialMenu;
