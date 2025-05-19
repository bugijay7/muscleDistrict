import React from 'react';

import coachingImg from '../images/services/coaching.jpeg';
import nutritionImg from '../images/services/nutrition.jpeg';
import groupTrainingImg from '../images/services/group-training.jpeg';
import personalTrainingImg from '../images/services/personal-training.jpeg';
import spaImg from '../images/services/spa.jpeg';
import equipmentImg from '../images/services/equipment.jpeg';

const services = [
  {
    title: "1-on-1 Coaching",
    description: "Get personalized coaching from certified experts tailored to your fitness journey.",
    image: coachingImg,
  },
  {
    title: "Nutrition Planning",
    description: "Custom meal plans designed to support your goals and boost performance.",
    image: nutritionImg,
  },
  {
    title: "Group Training",
    description: "Join fun, energetic group sessions that push your limits with others.",
    image: groupTrainingImg,
  },
  {
    title: "Personal Training",
    description: "Private sessions focusing on form, goals, and continuous improvement.",
    image: personalTrainingImg,
  },
  {
    title: "Spa & Recovery",
    description: "Relax with world-class spa services and recovery treatments.",
    image: spaImg,
  },
  {
    title: "State-of-the-Art Equipment",
    description: "Train with the latest equipment designed for performance and results.",
    image: equipmentImg,
  },
];

function Services() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our <strong className="text-rose-500">Services</strong>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
