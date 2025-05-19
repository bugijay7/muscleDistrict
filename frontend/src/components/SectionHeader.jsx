// SectionHeader.js
import React from 'react';

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center my-10">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="text-base mt-4">{subtitle}</p>
    </div>
  );
}

export default SectionHeader;
