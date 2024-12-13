import React from 'react';
import CalcBarbecue from "../components/CalcBarbecue";
import Coding from '../assets/coding.jpg'
const Calc = () => {
  return (

    <div
      className='page-container' style={{backgroundImage: `url(${Coding})`, }}>
      <h1>Barbecue Calculator</h1>
      <CalcBarbecue />

    </div>
  );
};

export default Calc;