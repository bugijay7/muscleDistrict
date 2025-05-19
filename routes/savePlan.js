import express from 'express';
import { sql } from '../config/db.js'; 
const router = express.Router();

router.post('/save-plan', async (req, res) => {
  const plan = req.body.plan;
  const username = req.user?.username; // Get username from session (logged-in user)

  console.log('Received:', { username, plan });

  if (!username || !plan) {
    return res.status(400).json({ message: 'Username and plan are required' });
  }

  try {
    const existingPlan = await sql`
      SELECT * FROM plans WHERE username = ${username}
    `;
    console.log('Existing plan:', existingPlan);

    let result;

    if (existingPlan.length > 0) {
      result = await sql`
        UPDATE plans SET plan_type = ${plan} WHERE username = ${username} RETURNING *;
      `;
      console.log('Updated plan:', result);
      return res.status(200).json({ message: 'Plan updated successfully', plan: result[0] });
    } else {
      result = await sql`
        INSERT INTO plans (username, plan_type) VALUES (${username}, ${plan}) RETURNING *;
      `;
      console.log('Inserted plan:', result);
      return res.status(201).json({ message: 'Plan saved successfully', plan: result[0] });
    }
  } catch (error) {
    console.error('Error saving plan:', error);
    return res.status(500).json({ message: 'Failed to save plan' });
  }
});

export default router;
