import React from 'react';
import { Link } from 'react-router-dom';
import TrainerCard from './TrainerCard';

import alexImg from '../images/trainers/alex.jpeg';
import lenaImg from '../images/trainers/lena.jpeg';
import marcusImg from '../images/trainers/marcus.jpeg';

const trainers = [
  {
    name: 'Alex Stone',
    role: 'Strength Coach',
    bio: 'Expert in hypertrophy and compound lifting. 10+ years helping athletes transform their physiques.',
    image: alexImg,
  },
  {
    name: 'Lena Carter',
    role: 'HIIT & Conditioning Coach',
    bio: 'Specializes in high-intensity interval training and endurance programs. Passionate about results.',
    image: lenaImg,
  },
  {
    name: 'Marcus Rivera',
    role: 'Mobility & Rehab Specialist',
    bio: 'Focused on functional strength, recovery, and injury prevention. Your form is his priority.',
    image: marcusImg,
  },
];

function TrainersSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Meet Our <strong className="text-rose-500">Trainers</strong>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((trainer, index) => (
          <TrainerCard
            key={index}
            name={trainer.name}
            role={trainer.role}
            bio={trainer.bio}
            image={trainer.image}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-700 text-base">
          Want to meet the full crew?{' '}
          <Link
            to="/trainers"
            className="text-rose-600 font-semibold underline hover:text-rose-800 transition"
          >
            View all trainers
          </Link>
        </p>
      </div>
    </section>
  );
}

export default TrainersSection;
