import React from 'react';
import gym1 from '../../images/about/gym1.jpeg';
import gym2 from '../../images/about/gym2.jpeg';
import gym3 from '../../images/about/gym3.jpeg';
import gym4 from '../../images/about/gym4.jpeg';
import gym5 from '../../images/about/gym5.jpeg';
import gym6 from '../../images/about/gym6.jpeg';

const galleryImages = [gym1, gym2, gym3, gym4, gym5, gym6];

function GallerySection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>

      {/* 📱 Mobile Slideshow */}
      <div className="carousel w-full md:hidden">
        {galleryImages.map((img, index) => (
          <div key={index} className="carousel-item w-full">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* 💻 Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
