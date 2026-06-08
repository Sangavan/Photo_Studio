const express = require('express');
const router = express.Router();
const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
} = require('../controllers/bookingController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Public routes
router.post('/', createBooking);

// Admin only routes
router.get('/', protect, adminOnly, getAllBookings);
router.get('/:id', protect, adminOnly, getBookingById);
router.put('/:id', protect, adminOnly, updateBookingStatus);
router.delete('/:id', protect, adminOnly, deleteBooking);

module.exports = router;