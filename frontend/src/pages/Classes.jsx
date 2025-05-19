import React from 'react';
import SectionHeader from '../components/SectionHeader';  // Optional for section titles
import ClassCard from '../components/ClassCard'; // Class Cards that show details for each class
import ScheduleGrid from '../components/ScheduleGrid'; // Optional, if you're showing class schedules or calendar
import TrainersSection from '../components/TrainerSection';
import JoinCTA from '../components/about/JoinCTA';

function Classes() {
  return (
      <div >
      <SectionHeader  title="Our Core Focus" subtitle="From structured workouts to nutrition and self-defence — discover how we support your complete fitness journey."   />

      <div className="class-cards-container"><ClassCard /></div>

      <SectionHeader  title="Meet Our Trainers" subtitle="Our expert trainers will guide you through every class" />

      <div className="trainer-cards-container"><TrainersSection /> </div>

      <SectionHeader title="Class Schedules" subtitle="Find the perfect time for your classes" />

      <ScheduleGrid /> 
      <JoinCTA />
      </div>
  );
}

export default Classes;
