import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgImage from '../images/login-bg.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/login',
        {
          email,
          password,
        },
        {
          withCredentials: true, // ✅ Important: allow cookie to be stored
        }
      );

      console.log('Login successful:', res.data);

      // Optionally store user info if needed
      localStorage.setItem('username', res.data.user.username);

      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err.response?.data?.message || err.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-primary font-semibold">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
