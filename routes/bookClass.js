import express from 'express';
const router = express.Router();
import { sql } from '../config/db.js'; // Adjust the path as necessary


router.post('/book-class', async (req, res) => {
  console.log("SESSION:", req.session);
console.log("USER:", req.user);
  const { classType, day, time, trainer } = req.body;

  const user = req.user; // <— Passport sets this
  if (!user) {
    return res.status(401).json({ message: 'You must be logged in to book a class' });
  }

  const username = user.username;

  if (!classType || !day || !time || !trainer) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const inserted = await sql`
      INSERT INTO bookings (username, class_type, day, time, trainer)
      VALUES (${username}, ${classType}, ${day}, ${time}, ${trainer})
      RETURNING *;
    `;

    res.status(201).json({ message: 'Class booked successfully!', booking: inserted[0] });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Failed to save booking' });
  }
});


export default router;
