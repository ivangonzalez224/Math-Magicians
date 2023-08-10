import '../App.css';
import React, { useState } from 'react';
import ButtonsContainer from './ButtonsContainer';
import Display from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setCalculatorState(calculate(calculatorState, buttonName));
  };

  return (
    <div className="container_calculator">
      <Display
        result={calculatorState.next || calculatorState.total || '0'}
      />
      <ButtonsContainer
        handleClick={handleClick}
      />
    </div>
  );
};

export default Calculator;
