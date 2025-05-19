import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';

import { sql } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import "./middlewares/auth.js"; // Import passport strategies
import bookClass from "./routes/bookClass.js"
import savePlan from "./routes/savePlan.js"
import profileRoutes from "./routes/profile.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors( {
  origin: 'https://muscle-district.vercel.app',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,  
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // only true in production
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
}

}));

// Import and configure passport strategies
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log('SESSION:', req.session);
  console.log('USER:', req.user);
  next();
});


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api', bookClass); 
app.use('/api', savePlan );
app.use('/api/user/profile', profileRoutes ); // Ensure this is imported and used





// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

