import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://muscledistrict.onrender.com/api/user/profile', {
      withCredentials: true, // Ensures cookies are sent (important for sessions)
    })
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching profile:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading profile...</p>;

  if (!profile || !profile.user) {
    return <p className="text-center text-red-500 mt-10">No profile data found.</p>;
  }

  const { user, bookings, plan } = profile;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">User Profile</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 text-gray-800">User Info</h2>
        <p className="text-lg"><span className="font-semibold">Username:</span> {user.username}</p>
        <p className="text-lg"><span className="font-semibold">Email:</span> {user.email}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 text-gray-800">Subscription Plan</h2>
        {plan ? (
          <>
            <p className="text-lg"><span className="font-semibold">Plan Type:</span> {plan.plan_type}</p>
            <p className="text-lg">
              <span className="font-semibold">Started On:</span> {new Date(plan.created_at).toLocaleDateString()}
            </p>
          </>
        ) : (
          <p className="text-gray-500 italic">No plan found</p>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 text-gray-800">Bookings</h2>
        {bookings && bookings.length > 0 ? (
          <ul className="space-y-4">
            {bookings.map((booking, index) => (
              <li
                key={index}
                className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-lg transition-shadow"
              >
                <p className="text-lg"><span className="font-semibold">Class:</span> {booking.class_type}</p>
                <p className="text-lg"><span className="font-semibold">Day:</span> {booking.day}</p>
                <p className="text-lg"><span className="font-semibold">Time:</span> {booking.time}</p>
                <p className="text-lg"><span className="font-semibold">Trainer:</span> {booking.trainer}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No bookings found.</p>
        )}
      </section>
    </div>
  );
}

export default Profile;
