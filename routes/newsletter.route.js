import express from 'express';
import { saveNewsletterEmail } from '../controllers/newsletter.controller.js';

const router = express.Router();

router.post('/post', saveNewsletterEmail);

export default router;
