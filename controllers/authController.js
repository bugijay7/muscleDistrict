import bcrypt from "bcryptjs";
import { sql } from "../config/db.js";
import passport from "passport";

// SIGNUP
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await sql`
      INSERT INTO users (username, email, password)
      VALUES (${username}, ${email}, ${hashedPassword})
      RETURNING id, username, email;
    `;

    res.status(201).json({ message: "User created successfully", user: newUser[0] });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// LOGIN
export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info.message });

    // ✅ STEP 2: Save session
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({
        message: "Login successful",
        user
      });
    });
  })(req, res, next);
};

// LOGOUT
export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error during logout:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.clearCookie("connect.sid"); // Optional: Clears session cookie
    res.status(200).json({ message: "Logout successful" });
  });
};
