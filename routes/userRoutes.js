import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';
import { validateUserProfile } from '../middlewares/validation.js';

const router = express.Router();

// Middleware to check if user is authenticated
router.use(isAuthenticated);

// Get user profile
router.get('/profile', getUserProfile);

// Update user profile
router.post('/profile', validateUserProfile, updateUserProfile);

export default router;
