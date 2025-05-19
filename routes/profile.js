import express from 'express';
import { sql } from '../config/db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
     if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized: No user logged in' });
    }
    const userId = req.user?.id; // Replace with actual auth or middleware

    // Get user info
    const users = await sql`SELECT id, username, email FROM users WHERE id = ${userId}`;
    if (!users.length) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get user's bookings
    const bookings = await sql`
      SELECT day, class_type, time, trainer, created_at 
      FROM bookings 
      WHERE username = ${users[0].username}
    `;

    // Get user's plan
    const plans = await sql`
      SELECT plan_type, created_at 
      FROM plans 
      WHERE username = ${users[0].username}
    `;

    res.json({
      user: users[0],
      bookings,
      plan: plans[0] || null
    });

  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
