import React from 'react';
import '../App.css';

const ButtonsContainer = () => (
  <div className="container_buttons">
    <div className="row">
      <button className="button_gray" type="button">AC</button>
      <button className="button_gray" type="button">+/-</button>
      <button className="button_gray" type="button">%</button>
      <button className="button_gray button-orange" type="button">÷</button>
    </div>
    <div className="row">
      <button className="button_gray" type="button">7</button>
      <button className="button_gray" type="button">8</button>
      <button className="button_gray" type="button">9</button>
      <button className="button_gray button-orange" type="button">x</button>
    </div>
    <div className="row">
      <button className="button_gray" type="button">4</button>
      <button className="button_gray" type="button">5</button>
      <button className="button_gray" type="button">6</button>
      <button className="button_gray button-orange" type="button">-</button>
    </div>
    <div className="row">
      <button className="button_gray" type="button">1</button>
      <button className="button_gray" type="button">2</button>
      <button className="button_gray" type="button">3</button>
      <button className="button_gray button-orange" type="button">+</button>
    </div>
    <div className="row">
      <button className="button_gray button_gray0" type="button">0</button>
      <button className="button_gray" type="button">.</button>
      <button className="button_gray button-orange" type="button">=</button>
    </div>
  </div>
);

export default ButtonsContainer;
