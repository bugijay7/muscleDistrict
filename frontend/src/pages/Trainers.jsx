// pages/Trainers.jsx
import React from 'react';
import TrainerCard from '../components/TrainerCard';
import JoinCta from '../components/about/JoinCTA';

import alex from '../images/trainers/alex.jpeg';
import bella from '../images/trainers/bella.jpeg';
import chris from '../images/trainers/chris.jpeg';
import dana from '../images/trainers/dana.jpeg';
import emily from '../images/trainers/emily.jpeg';
import jack from '../images/trainers/jack.jpeg';
import lisa from '../images/trainers/lisa.jpeg';
import mark from '../images/trainers/mark.jpeg';
import nina from '../images/trainers/nina.jpeg';
import oliver from '../images/trainers/oliver.jpeg';
import rachel from '../images/trainers/rachel.jpeg';
import theo from '../images/trainers/theo.jpeg';

const trainerData = [
  { name: 'Alex Stone', specialty: 'Strength & Conditioning', image: alex },
  { name: 'Bella Cruz', specialty: 'Yoga & Flexibility', image: bella },
  { name: 'Chris Lee', specialty: 'HIIT & Cardio', image: chris },
  { name: 'Dana Smith', specialty: 'Weight Loss Coach', image: dana },
  { name: 'Emily Brooks', specialty: 'Functional Training', image: emily },
  { name: 'Jack Daniels', specialty: 'Bodybuilding', image: jack },
  { name: 'Lisa Ray', specialty: 'Pilates Expert', image: lisa },
  { name: 'Mark James', specialty: 'CrossFit', image: mark },
  { name: 'Nina Torres', specialty: 'Zumba Instructor', image: nina },
   { name: 'Oliver Gray', specialty: 'Endurance & Running', image: oliver },
  { name: 'Rachel Kim', specialty: 'Nutrition & Wellness', image: rachel },
  { name: 'Theo Blake', specialty: 'Calisthenics Specialist', image: theo },
];

function Trainers() {
  return (
    <section className="min-h-screen px-4 py-12 bg-base-200">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Meet Our Trainers</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Certified experts dedicated to helping you crush your fitness goals.
        </p>
      </div>

      {/* Trainer Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {trainerData.map((trainer, index) => (
          <TrainerCard
            key={index}
            name={trainer.name}
            specialty={trainer.specialty}
            image={trainer.image}
          />
        ))}
      </div>
      <JoinCta />
    </section>
  );
}

export default Trainers;
