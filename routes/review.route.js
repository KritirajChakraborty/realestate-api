import express from 'express';
import { verifyUser } from '../utils/verifyUser.js';
import { createReview, getReviews } from '../controllers/review.controller.js';

const router = express.Router();

router.post('/create', verifyUser, createReview);
router.get('/get', getReviews);

export default router;
