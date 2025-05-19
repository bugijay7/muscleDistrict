import React from 'react';
import { useEffect, useState } from 'react';
import bgImage from '../images/registration-bg.jpg'; // adjust path if needed

function Registration() {
  const [user, setUser] = useState(null); // Add logic later as needed

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-6 text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Thank you for being a MuscleDistrict family member
        </h1>

        {user ? (
          <p className="text-lg text-green-600 font-medium">Hello, {user.name || 'Member'}!</p>
        ) : (
          <p className="text-base text-gray-700">
            Please{' '}
            <a href="/login" className="text-blue-600 hover:underline font-semibold">
              log in
            </a>{' '}
            or{' '}
            <a href="/signup" className="text-blue-600 hover:underline font-semibold">
              register
            </a>{' '}
            if you aren’t a member to continue.
          </p>
        )}
      </div>
    </div>
  );
}

export default Registration;
