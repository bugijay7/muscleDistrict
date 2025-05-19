import React from 'react';
import { Link } from 'react-router-dom';
import joinBg from '../../images/join-bg.jpg';

function JoinCTA() {
  return (
    <section
      className="py-16 bg-cover bg-center text-white text-center"
      style={{
        backgroundImage: `url(${joinBg})`,
      }}
    >
      <div className="bg-black bg-opacity-60 max-w-6xl mx-auto px-4 py-12 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Ready to Join Muscle District?</h2>
        <p className="mb-6 text-lg">
          Whether you’re looking to get fit, build strength, or improve your performance, we have everything you need to reach your goals.
        </p>
         <Link
  to="/registration"
  className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition duration-300"
>
  Join Us
</Link>

      </div>
    </section>
  );
}

export default JoinCTA;
