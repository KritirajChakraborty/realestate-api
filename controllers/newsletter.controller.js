import Newsletter from '../models/newsletter.model.js';

export const saveNewsletterEmail = async (req, res, next) => {
  try {
    const saveemail = await Newsletter.create(req.body);
    return res.status(201).json({ message: 'Email saved!' });
  } catch (error) {
    next(error);
  }
};
