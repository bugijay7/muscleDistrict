import { sql } from "../config/db.js";

export const getUserProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const userId = req.user.id;

    // Get user basic info
    const userProfile = await sql`SELECT id, username, email FROM users WHERE id = ${userId}`;
    if (userProfile.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = userProfile[0];

    // Fetch the user's plan by username
    const plans = await sql`SELECT plan_type FROM plans WHERE username = ${user.username}`;
    const plan = plans.length > 0 ? plans[0].plan_type : 'Free'; // default to 'Free' if none

    res.status(200).json({ user: { ...user, plan } });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const updateUserProfile = async (req, res) => {
  if (!req.session.user || !req.session.user.id) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const userId = req.session.user.id;
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existing = await sql`
      SELECT id FROM users WHERE email = ${email} AND id != ${userId}
    `;
    if (existing.length > 0) {
      return res.status(400).json({ message: "Email already in use by another account" });
    }

    const updatedUser = await sql`
      UPDATE users
      SET username = ${username.trim()}, email = ${email.trim().toLowerCase()}
      WHERE id = ${userId}
      RETURNING id, username, email;
    `;

    if (updatedUser.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile updated successfully", user: updatedUser[0] });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
