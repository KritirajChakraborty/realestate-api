import mongoose from 'mongoose';

const newletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Newsletter = mongoose.model('Newsletter', newletterSchema);

export default Newsletter;
