const Booking = require('../models/Booking');
const User = require('../models/User');
const nodemailer = require('nodemailer');

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      package: pkg,
      sessionType,
      date,
      time,
      location,
      notes,
    } = req.body;

    // Create booking
    const booking = await Booking.create({
      name,
      email,
      phone,
      package: pkg,
      sessionType,
      date,
      time,
      location,
      notes,
      status: 'Pending',
    });

    // Send confirmation email to client
    try {
      await transporter.sendMail({
        from: `"SK Colors Photography" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Booking Confirmation — SK Colors Photography',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
            <div style="background: #1E40AF; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0;">SK Colors Photography</h1>
              <p style="color: #93C5FD; margin: 5px 0;">Capturing Life's True Colors</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #1E40AF;">Booking Confirmed! 🎉</h2>
              <p>Dear <strong>${name}</strong>,</p>
              <p>Thank you for booking with SK Colors Photography! We have received your booking request and will confirm shortly.</p>
              <div style="background: #EFF6FF; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1E40AF;">
                <h3 style="color: #1E40AF; margin-top: 0;">Booking Details</h3>
                <p><strong>Package:</strong> ${pkg}</p>
                <p><strong>Session Type:</strong> ${sessionType}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Location:</strong> ${location}</p>
                ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
              </div>
              <p>We will contact you within 24 hours to confirm your booking.</p>
              <p>If you have any questions, please contact us at:</p>
              <p>📞 +94 77 123 4567 | ✉️ info@skcolors.lk</p>
              <p style="color: #6B7280; font-size: 12px; margin-top: 30px;">© 2024 SK Colors Photography. All rights reserved.</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.log('Email error:', emailError.message);
    }

    res.status(201).json({
      message: 'Booking created successfully',
      booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private/Admin
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single booking
// @route   GET /api/bookings/:id
// @access  Private/Admin
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Private/Admin
const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    booking.status = req.body.status || booking.status;
    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete booking
// @route   DELETE /api/bookings/:id
// @access  Private/Admin
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    await booking.deleteOne();
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
};