import express from 'express';
import { verifyUser } from '../utils/verifyUser.js';
import { createReview } from '../controllers/review.controller.js';

const router = express.Router();

router.post('/create', verifyUser, createReview);

export default router;
