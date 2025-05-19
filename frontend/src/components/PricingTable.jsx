import React from 'react';
import { Link } from 'react-router-dom';

function PricingTable() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-left mb-8">Our Membership Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Basic Plan */}
        <div className="card bg-sky-200 shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-4">Basic Plan</h3>
          <p className="text-left text-lg mb-4">Perfect for those just starting their fitness journey.</p>
          <div className="text-left text-xl font-semibold mb-4">Ksh. 4500 / month</div>
          <ul className="mb-6">
            <li className="mb-2">Access to gym facilities</li>
            <li className="mb-2">Basic equipment</li>
            <li className="mb-2">1 fitness assessment</li>
            <li className="mb-2">-</li>
            <li className="mb-2">-</li>
            <li className="mb-2">-</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="card bg-sky-200 shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-4">Premium Plan</h3>
          <p className="text-left text-lg mb-4">For those looking to take their fitness to the next level.</p>
          <div className="text-left text-xl font-semibold mb-4">Ksh. 6000 / month</div>
          <ul className="mb-6">
            <li className="mb-2">Access to all gym facilities</li>
            <li className="mb-2">Advanced equipment</li>
            <li className="mb-2">4 fitness assessments</li>
            <li className="mb-2">Personal trainer sessions</li>
            <li className="mb-2">-</li>
            <li className="mb-2">-</li>
          </ul>
        </div>

        {/* Elite Plan */}
        <div className="card bg-sky-200 shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-4">Elite Plan</h3>
          <p className="text-left text-lg mb-4">For the ultimate fitness experience with exclusive perks.</p>
          <div className="text-left text-xl font-semibold mb-4">Ksh. 9000 / month</div>
          <ul className="mb-6">
            <li className="mb-2">Access to all gym facilities</li>
            <li className="mb-2">Premium equipment</li>
            <li className="mb-2">Unlimited fitness assessments</li>
            <li className="mb-2">Unlimited personal trainer sessions</li>
            <li className="mb-2">Exclusive classes</li>
            <li className="mb-2">Guest passes</li>
          </ul>
        </div>

      </div>

      {/* Central Join Link */}
      <div className="text-center mt-10">
        <Link
          to="/registration"
          className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition duration-300"
        >
          Join Now
        </Link>
      </div>
    </section>
  );
}

export default PricingTable;
