import React from 'react';

function WhyChooseUs() {
  return (
    <section className="py-16 bg-transparent-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Why Choose Muscle District?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-left bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Elite <strong className="text-rose-500">Training </strong>  Programs</h3>
            <p className="text-gray-600">
              Our programs are designed for all fitness levels, from beginners to elite athletes, with personalized coaching to achieve your goals.
            </p>
          </div>
          <div className="flex flex-col items-left bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Cutting-edge <strong className="text-rose-500">Equipment </strong> </h3>
            <p className="text-gray-600">
              We provide top-of-the-line equipment to ensure you get the best workout experience with the latest technology in fitness.
            </p>
          </div>
          <div className="flex flex-col items-left bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Luxurious <strong className="text-rose-500">Amenities </strong> </h3>
            <p className="text-gray-600">
              Relax after your workouts in our high-end amenities, including a steam room, sauna, and locker rooms designed for comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
