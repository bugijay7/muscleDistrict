import React from 'react';
import { FiBarChart2, FiActivity, FiHeart, FiShield } from 'react-icons/fi';
import gymImage from '../images/gym.jpg'; // Replace with your actual image path

const features = [
  {
    icon: <FiBarChart2 className="h-8 w-8 text-secondary" />,
    title: 'Progression',
    description: 'Track your journey and smash goals with measurable progress and performance metrics.',
  },
  {
    icon: <FiActivity className="h-8 w-8 text-secondary" />,
    title: 'Workout',
    description: 'High-intensity, expert-led workouts tailored for strength and endurance.',
  },
  {
    icon: <FiHeart className="h-8 w-8 text-secondary" />,
    title: 'Nutrition',
    description: 'Custom nutrition plans to support your health, performance, and recovery.',
  },
  {
    icon: <FiShield className="h-8 w-8 text-secondary" />,
    title: 'Self Defence',
    description: 'Gain confidence and skills with defense training, boxing, and martial arts.',
  },
];

function ClassCard() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Left side image */}
      <div>
        <img
          src={gymImage}
          alt="Gym"
          className="w-full h-3/4 object-cover rounded-xl shadow-xl"
        />
      </div>

      {/* Right side cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col items-start"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClassCard;
