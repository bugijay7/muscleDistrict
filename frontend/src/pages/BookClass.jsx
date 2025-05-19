import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

const scheduleData = [
  { day: 'Monday', classes: [ { time: '8:00 AM', className: 'Yoga' }, { time: '10:00 AM', className: 'Pilates' }, { time: '5:00 PM', className: 'HIIT' } ] },
  { day: 'Tuesday', classes: [ { time: '9:00 AM', className: 'Cardio' }, { time: '12:00 PM', className: 'Strength Training' }, { time: '6:00 PM', className: 'Zumba' } ] },
  { day: 'Wednesday', classes: [ { time: '8:00 AM', className: 'Yoga' }, { time: '11:00 AM', className: 'Crossfit' }, { time: '7:00 PM', className: 'Spin Class' } ] },
  { day: 'Thursday', classes: [ { time: '10:00 AM', className: 'Boxing' }, { time: '1:00 PM', className: 'Pilates' }, { time: '6:00 PM', className: 'HIIT' } ] },
  { day: 'Friday', classes: [ { time: '8:00 AM', className: 'Yoga' }, { time: '12:00 PM', className: 'Strength Training' }, { time: '5:00 PM', className: 'Zumba' } ] },
  { day: 'Saturday', classes: [ { time: '9:00 AM', className: 'Crossfit' }, { time: '11:00 AM', className: 'Cardio' }, { time: '4:00 PM', className: 'Spin Class' } ] },
];

function BookClass() {
  const [username, setUsername] = useState('');
  const [formData, setFormData] = useState({
    day: '',
    classType: '',
    time: '',
    trainer: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const res = await axios.get('https://muscledistrict.onrender.com/api/user/profile', { withCredentials: true });
        setUsername(res.data.user.username);
      } catch (err) {
        setMessage({ type: 'error', text: 'Failed to fetch user. Please login.' });
      }
    };

    fetchUsername();
  }, []);

  // Get all unique class types
  const uniqueClassTypes = [
    ...new Set(scheduleData.flatMap(day => day.classes.map(cls => cls.className))),
  ];

  // Get times for selected day & classType
  const availableTimes = () => {
    const daySchedule = scheduleData.find(d => d.day === formData.day);
    if (!daySchedule) return [];
    return daySchedule.classes
      .filter(cls => cls.className === formData.classType)
      .map(cls => cls.time);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset time if classType or day changes
    if (name === 'classType' || name === 'day') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        time: '',
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const submissionData = { ...formData, username };
      const response = await axios.post(
        'http://localhost:3000/api/book-class',
        submissionData,
        { withCredentials: true }
      );

      setMessage({ type: 'success', text: 'Your class has been booked!' });
      setFormData({ classType: '', day: '', time: '', trainer: '' });
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Booking failed. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Book a Class</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        {/* Username Display */}
        <div className="text-center text-gray-700 text-lg font-medium">
          Booking as: <span className="text-black font-semibold">{username}</span>
        </div>

        {/* Day Selector */}
        <select
          name="day"
          value={formData.day}
          onChange={handleChange}
          className="w-full select select-bordered"
          required
        >
          <option value="">Select Day</option>
          {scheduleData.map((dayObj, idx) => (
            <option key={idx} value={dayObj.day}>{dayObj.day}</option>
          ))}
        </select>

        {/* Class Type */}
        <select
          name="classType"
          value={formData.classType}
          onChange={handleChange}
          className="w-full select select-bordered"
          required
        >
          <option value="">Select Class Type</option>
          {uniqueClassTypes.map((type, idx) => (
            <option key={idx} value={type}>{type}</option>
          ))}
        </select>

        {/* Time Selector (based on day + classType) */}
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full select select-bordered"
          required
          disabled={!formData.day || !formData.classType}
        >
          <option value="">Select Time</option>
          {availableTimes().map((time, idx) => (
            <option key={idx} value={time}>{time}</option>
          ))}
        </select>

        {/* Trainer */}
        <select
          name="trainer"
          value={formData.trainer}
          onChange={handleChange}
          className="w-full select select-bordered"
          required
        >
          <option value="">Select a Trainer</option>
          {trainerData.map((trainer, idx) => (
            <option key={idx} value={trainer.name}>
              {trainer.name} – {trainer.specialty}
            </option>
          ))}
        </select>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? 'Booking...' : 'Book Class'}
        </button>

        {/* Message */}
        {message && (
          <p className={`mt-4 text-center ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
}

export default BookClass;
