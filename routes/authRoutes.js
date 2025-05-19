import express from 'express';
import passport from 'passport';
import { signup, login, logout } from '../controllers/authController.js';
import { validateSignup, validateLogin } from '../middlewares/validation.js';
import { isAuthenticated } from '../middlewares/auth.js';
// Import necessary modules and controllers
// Define the routes for authentication
const router = express.Router();
// Register route
router.post('/signup', validateSignup, signup);
// Login route
router.post('/login', validateLogin, login);
// Logout route
router.post('/logout', isAuthenticated, logout);    


export default router;