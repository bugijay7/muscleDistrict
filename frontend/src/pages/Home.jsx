import React from 'react'
import Hero from '../components/Hero' // Adjust this path if Hero is located elsewhere
import ClassCard from '../components/ClassCard'
import TestimonialSlider from '../components/TestimonialSlider'
import ContactForm from '../components/ContactForm'
import TrainerSection from '../components/TrainerSection'
import JoinCTA from '../components/about/JoinCTA'

function Home() {
  return (
    <div>
      <Hero />
      <TestimonialSlider />
      <ClassCard />
      <TrainerSection />
      <ContactForm />
      <JoinCTA />
    </div>
  )
}


export default Home
