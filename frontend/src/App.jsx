import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Memberships from './pages/Memberships';
import Classes from './pages/Classes';
import Trainers from './pages/Trainers';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import BookClass from './pages/BookClass';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Registration from './pages/Registration';
import FootNotes from './components/Footnotes';
import PlanForm from './pages/PlanForm';
import Profile from './pages/Profile';

function App() {
 

  return (
    <div  className="min-h-screen">
      <Router>
      <ScrollToTop />
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Memberships />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/book-class" element={<BookClass />} />
          <Route path="planform" element={<PlanForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
        <FootNotes />
      </Router>
    </div>
  );
}

export default App;
