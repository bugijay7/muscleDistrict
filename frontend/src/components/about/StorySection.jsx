import React from 'react';
import storyImage from '../../images/story.jpg'; // Adjust the path based on your project

function StorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Side */}
        <div className="w-full md:w-1/2">
          <img
            src={storyImage}
            alt="Our Story"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Our <strong className="text-rose-500">Story </strong> </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            MuscleDistrict was born from a passion for fitness and a frustration with cookie-cutter gyms that lacked heart.
            Founded in 2020 by a group of dedicated athletes and trainers, we envisioned a space where intensity met community —
            where every rep counted and every member mattered.
            <br /><br />
            From humble beginnings in a garage gym to a state-of-the-art facility, our journey has been driven by:- <br></br><br></br>
             <strong className="text-rose-500">Sweat </strong> <br></br><br></br>
             <strong className="text-rose-500">Support </strong> <br></br><br></br>
            <strong className="text-rose-500">relentless aambition </strong>  <br></br><br></br>
            We believe in the power of transformation, not just physically but mentally and emotionally.
            Today, we proudly serve a community that trains with purpose and inspires results.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
