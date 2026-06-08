const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  getPortfolio,
  addPhoto,
  deletePhoto,
} = require('../controllers/portfolioController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

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
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) return cb(null, true);
    cb(new Error('Only JPEG and PNG images allowed'));
  },
});

router.get('/', getPortfolio);
router.post('/', protect, adminOnly, upload.single('photo'), addPhoto);
router.delete('/:id', protect, adminOnly, deletePhoto);

module.exports = router;