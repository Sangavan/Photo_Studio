const Package = require('../models/Package');

// @desc    Get all packages
// @route   GET /api/packages
// @access  Public
const getPackages = async (req, res) => {
  try {
    const packages = await Package.find().sort({ createdAt: 1 });
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create package
// @route   POST /api/packages
// @access  Private/Admin
const createPackage = async (req, res) => {
  try {
    const pkg = await Package.create(req.body);
    res.status(201).json(pkg);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update package
// @route   PUT /api/packages/:id
// @access  Private/Admin
const updatePackage = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);
    if (!pkg) {
      return res.status(404).json({ message: 'Package not found' });
    }
    const updated = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete package
// @route   DELETE /api/packages/:id
// @access  Private/Admin
const deletePackage = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);
    if (!pkg) {
      return res.status(404).json({ message: 'Package not found' });
    }
    await pkg.deleteOne();
    res.json({ message: 'Package deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Seed default packages
// @route   POST /api/packages/seed
// @access  Private/Admin
const seedPackages = async (req, res) => {
  try {
    await Package.deleteMany({});
    const packages = await Package.insertMany([
      {
        name: 'Basic',
        price: 'LKR 25,000',
        duration: '2 Hours',
        icon: '🥉',
        popular: false,
        features: ['2 Hour Photo Session', '50 Edited Photos', 'Online Gallery Access', '1 Location', 'Digital Download', 'Ready in 7 Days'],
        notIncluded: ['Printed Photos', 'Second Photographer', 'Video Coverage'],
      },
      {
        name: 'Standard',
        price: 'LKR 50,000',
        duration: '4 Hours',
        icon: '🥈',
        popular: true,
        features: ['4 Hour Photo Session', '150 Edited Photos', 'Online Gallery Access', '2 Locations', 'Digital Download', 'Ready in 5 Days', '10 Printed Photos', 'Photo Album (20 pages)'],
        notIncluded: ['Second Photographer', 'Video Coverage'],
      },
      {
        name: 'Premium',
        price: 'LKR 100,000',
        duration: 'Full Day',
        icon: '🥇',
        popular: false,
        features: ['Full Day Photo Session', '300+ Edited Photos', 'Online Gallery Access', 'Unlimited Locations', 'Digital Download', 'Ready in 3 Days', '25 Printed Photos', 'Photo Album (40 pages)', 'Second Photographer', 'Video Highlights (3 min)'],
        notIncluded: [],
      },
    ]);
    res.json({ message: 'Packages seeded successfully', packages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPackages, createPackage, updatePackage, deletePackage, seedPackages };