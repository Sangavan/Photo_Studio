const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  uploadPhotos,
  notifyClient,
  getMyGallery,
  getAllGalleries,
  deletePhoto,
} = require('../controllers/galleryController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only JPEG and PNG images allowed'));
  },
});

// Admin routes
router.post('/upload', protect, adminOnly, upload.array('photos', 50), uploadPhotos);
router.post('/notify/:id', protect, adminOnly, notifyClient);
router.get('/', protect, adminOnly, getAllGalleries);
router.delete('/:galleryId/photo/:photoId', protect, adminOnly, deletePhoto);

// Client routes
router.get('/my-gallery', protect, getMyGallery);

module.exports = router;