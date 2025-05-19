import React from 'react';
import PricingTable from '../components/PricingTable';
import WhyChooseUs from '../components/about/WhyChooseUs';
import JoinCTA from '../components/about/JoinCTA';
import MembershipsFAQs from '../components/Memberships/MembershipFAQs';

function Memberships() {
  return (
    <div className="px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Membership Plans</h1>
        <p className="text-lg text-gray-600">Choose the perfect plan that fits your fitness goals.</p>
      </div>
      <PricingTable />
      <MembershipsFAQs />
      <WhyChooseUs />
      <JoinCTA />
    </div>
  );
}

export default Memberships;
