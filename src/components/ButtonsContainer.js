import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const ButtonsContainer = ({ handleClick }) => (
  <div className="container_buttons">
    <div className="row">
      <button onClick={() => handleClick('AC')} className="button_gray" type="button">AC</button>
      <button onClick={() => handleClick('+/-')} className="button_gray" type="button">+/-</button>
      <button onClick={() => handleClick('%')} className="button_gray" type="button">%</button>
      <button onClick={() => handleClick('÷')} className="button_gray button-orange" type="button">÷</button>
    </div>
    <div className="row">
      <button onClick={() => handleClick('7')} className="button_gray" type="button">7</button>
      <button onClick={() => handleClick('8')} className="button_gray" type="button">8</button>
      <button onClick={() => handleClick('9')} className="button_gray" type="button">9</button>
      <button onClick={() => handleClick('x')} className="button_gray button-orange" type="button">x</button>
    </div>
    <div className="row">
      <button onClick={() => handleClick('4')} className="button_gray" type="button">4</button>
      <button onClick={() => handleClick('5')} className="button_gray" type="button">5</button>
      <button onClick={() => handleClick('6')} className="button_gray" type="button">6</button>
      <button onClick={() => handleClick('-')} className="button_gray button-orange" type="button">-</button>
    </div>
    <div className="row">
      <button onClick={() => handleClick('1')} className="button_gray" type="button">1</button>
      <button onClick={() => handleClick('2')} className="button_gray" type="button">2</button>
      <button onClick={() => handleClick('3')} className="button_gray" type="button">3</button>
      <button onClick={() => handleClick('+')} className="button_gray button-orange" type="button">+</button>
    </div>
    <div className="row">
      <button onClick={() => handleClick('0')} className="button_gray button_gray0" type="button">0</button>
      <button onClick={() => handleClick('.')} className="button_gray" type="button">.</button>
      <button onClick={() => handleClick('=')} className="button_gray button-orange" type="button">=</button>
    </div>
  </div>
);

ButtonsContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonsContainer;
