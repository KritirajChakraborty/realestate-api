import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import reviewRouter from './routes/review.route.js';
import newsletterRouter from './routes/newsletter.route.js';
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB successful');
  })
  .catch(err => {
    console.log(err);
  });

const app = express();
const corsOptions = {
  origin: [
    'https://realestateapp-b8hgceye8-kritirajs-projects.vercel.app',
    'http://localhost:5173',
  ],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-type', 'Authorization'],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is LIVE...');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.use('/api/review', reviewRouter);
app.use('/api/newsletter', newsletterRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
