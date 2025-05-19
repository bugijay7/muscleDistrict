import React from 'react';

function MissionSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-center">
      <h2 className="text-5xl font-bold mb-6">Our Mission</h2>
      <p className="text-lg mb-10 text-gray-600">
        At MuscleDistrict, our mission is to empower individuals to achieve peak physical performance through elite training, cutting-edge facilities, and a community-driven environment. We believe in sustainable fitness, mental resilience, and pushing beyond limits.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="bg-base-200 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">💪 Excellence</h3>
          <p>
            We aim to deliver top-tier fitness experiences through expert coaching, premium equipment, and intentional programming.
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">🤝 Community</h3>
          <p>
            Our gym thrives on support, motivation, and shared success. You’re not just a member — you’re part of the family.
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">🚀 Growth</h3>
          <p>
            We’re committed to personal and collective growth — physically, mentally, and professionally.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
