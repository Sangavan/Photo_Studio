const Portfolio = require('../models/Portfolio');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// @desc    Get all portfolio photos
// @route   GET /api/portfolio
// @access  Public
const getPortfolio = async (req, res) => {
  try {
    const photos = await Portfolio.find().sort({ createdAt: -1 });
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add photo to portfolio
// @route   POST /api/portfolio
// @access  Private/Admin
const addPhoto = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No photo uploaded' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'skcolors/portfolio',
      resource_type: 'image',
    });

    const photo = await Portfolio.create({
      title: req.body.title || 'Photo',
      category: req.body.category || 'Wedding',
      url: result.secure_url,
      publicId: result.public_id,
    });

    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete photo from portfolio
// @route   DELETE /api/portfolio/:id
// @access  Private/Admin
const deletePhoto = async (req, res) => {
  try {
    const photo = await Portfolio.findById(req.params.id);
    if (!photo) {
      return res.status(404).json({ message: 'Photo not found' });
    }

    await cloudinary.uploader.destroy(photo.publicId);
    await photo.deleteOne();

    res.json({ message: 'Photo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPortfolio, addPhoto, deletePhoto };