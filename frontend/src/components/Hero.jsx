import React from 'react';
import { Link } from 'react-router-dom';
import herobg from '../images/herogb1.jpg'; // adjust path based on file location

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${herobg})`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Muscle District</h1>
          <p className="mb-5">
            Train like a beast, look like a legend. Join the ultimate gym experience with world-class equipment, expert coaches, and a community built for growth.
          </p>
          <Link to="./registration">
            <button className="btn btn-primary">Become a Member</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
