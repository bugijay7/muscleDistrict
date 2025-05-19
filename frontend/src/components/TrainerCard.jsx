import React from 'react';

function TrainerCard({ name, role, specialty, bio, image }) {
  return (
    <div className="card shadow-lg bg-white rounded-lg overflow-hidden">
      <figure>
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover"
        />
      </figure>
      <div className="card-body p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-rose-600 font-semibold mb-2">{role}</p>
        <p className="text-sm text-gray-500">{specialty}</p>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>
      </div>
    </div>
    
  );
}

export default TrainerCard;
