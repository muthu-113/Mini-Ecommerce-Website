import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <div className="splash-bg">
      <div className="mass-text">
        <p className="welcome">Welcome to</p>
        <h1 className="brand">
          <span className="jvl">JVL</span> CART
        </h1>
        <div className="line"></div>
        <p className="shopping">SHOPPING</p>
      </div>
    </div>
  );
};

export default SplashScreen;