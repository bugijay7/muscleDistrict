import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { sql } from "../config/db.js";
import bcrypt from "bcryptjs";


passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (user.length === 0) {
          return done(null, false, { message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid credentials" });
        }

        // Store only safe fields in session
        return done(null, { id: user[0].id, username: user[0].username, email: user[0].email });
      } catch (error) {
        console.error("Error during authentication:", error);
        return done(error);
      }
    }
  )
);


// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});


// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await sql`SELECT id, username, email FROM users WHERE id = ${id}`;
    if (user.length === 0) {
      console.log("User not found in deserializeUser");
      return done(null, false);
    }
    console.log("deserializeUser found user:", user[0]);
    done(null, user[0]);
  } catch (error) {
    console.error("Error in deserializeUser:", error);
    done(error);
  }
});

export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Not authenticated" });
};