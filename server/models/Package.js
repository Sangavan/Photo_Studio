const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: '📷',
  },
  popular: {
    type: Boolean,
    default: false,
  },
  features: [{
    type: String,
  }],
  notIncluded: [{
    type: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Package', packageSchema);