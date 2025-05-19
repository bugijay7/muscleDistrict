import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/user/profile', {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-500 animate-pulse">Loading dashboard...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-red-600 font-semibold">Error: {error}</p>
      </div>
    );

  return (
    <section className="max-w-2xl mx-auto mt-16 px-8 py-10 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
        Welcome, <span className="text-indigo-600">{user?.username || 'User'}</span>
      </h2>

      <div className="bg-indigo-50 border border-indigo-200 text-indigo-800 px-4 py-3 rounded-md mb-6">
        <p className="text-lg">
          You're currently on the <span className="font-semibold">{user.plan || 'Free'}</span> plan.
        </p>
      </div>

      <div className="flex justify-between items-center gap-4 mt-6">
        <Link
          to="/book-class"
          className="flex-1 text-center px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
        >
          Book a Class
        </Link>

        <Link
          to="/planform"
          className="flex-1 text-center px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
        >
          View Plans
        </Link>
      </div>

      {/* Add profile link here */}
      <div className="mt-6 text-center">
        <Link
          to="/profile"
          className="inline-block px-6 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition"
        >
          View Profile
        </Link>
      </div>

      {message && (
        <p className="mt-4 text-green-700 bg-green-100 px-4 py-2 rounded-md border border-green-200">
          {message}
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-700 bg-red-100 px-4 py-2 rounded-md border border-red-200">
          {error}
        </p>
      )}
    </section>
  );
}

export default Dashboard;
