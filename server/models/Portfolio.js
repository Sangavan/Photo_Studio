const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'Photo',
  },
  category: {
    type: String,
    required: true,
    default: 'Wedding',
  },
  url: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Portfolio', portfolioSchema);