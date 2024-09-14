import Review from '../models/review.model.js';

export const createReview = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    return res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

export const getReviews = async (req, res, next) => {
  const limit = parseInt(req.query.limit) || 4;
  try {
    const reviews = await Review.find().limit(limit);
    return res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};
