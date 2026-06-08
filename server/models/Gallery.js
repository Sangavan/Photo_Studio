const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'Photo',
  },
  size: {
    type: String,
    default: '',
  },
});

const gallerySchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  sessionType: {
    type: String,
    required: true,
  },
  sessionDate: {
    type: String,
    required: true,
  },
  photos: [photoSchema],
  isActive: {
    type: Boolean,
    default: true,
  },
  expiryDate: {
    type: Date,
    default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
  },
  notified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Gallery', gallerySchema);