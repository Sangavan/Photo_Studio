const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  package: {
    type: String,
    required: [true, 'Package is required'],
    enum: ['Basic', 'Standard', 'Premium'],
  },
  sessionType: {
    type: String,
    required: [true, 'Session type is required'],
  },
  date: {
    type: String,
    required: [true, 'Date is required'],
  },
  time: {
    type: String,
    required: [true, 'Time is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  notes: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);