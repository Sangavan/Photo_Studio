const Gallery = require('../models/Gallery');
const User = require('../models/User');
const cloudinary = require('cloudinary').v2;
const { Resend } = require('resend');

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const resend = new Resend(process.env.RESEND_API_KEY);

// @desc    Upload photos to client gallery
// @route   POST /api/gallery/upload
// @access  Private/Admin
const uploadPhotos = async (req, res) => {
  try {
    const { clientEmail, clientName, sessionType, sessionDate, bookingId } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No photos uploaded' });
    }

    // Find or create client user
    let client = await User.findOne({ email: clientEmail });
    let tempPassword = null;

    if (!client) {
      tempPassword =
        Math.random().toString(36).slice(-6) +
        Math.random().toString(36).slice(-4).toUpperCase() +
        Math.floor(Math.random() * 100);

      client = await User.create({
        name: clientName,
        email: clientEmail,
        password: tempPassword,
        role: 'client',
      });
    }

    // Upload each photo to Cloudinary
    const uploadedPhotos = [];
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: `skcolors/${clientEmail}`,
        resource_type: 'image',
      });
      uploadedPhotos.push({
        url: result.secure_url,
        publicId: result.public_id,
        title: file.originalname,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      });
    }

    // Find existing gallery or create new one
    let gallery = await Gallery.findOne({ clientEmail });
    if (gallery) {
      gallery.photos.push(...uploadedPhotos);
      await gallery.save();
    } else {
      gallery = await Gallery.create({
        client: client._id,
        booking: bookingId || null,
        clientName,
        clientEmail,
        sessionType,
        sessionDate,
        photos: uploadedPhotos,
      });
    }

    res.status(201).json({
      message: 'Photos uploaded successfully',
      gallery,
      tempPassword,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Notify client that gallery is ready
// @route   POST /api/gallery/notify/:id
// @access  Private/Admin
const notifyClient = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ message: 'Gallery not found' });
    }

    const tempPassword = req.body.tempPassword || null;

    await resend.emails.send({
      from: 'SK Colors Photography <onboarding@resend.dev>',
      to: gallery.clientEmail,
      subject: 'Your Photos Are Ready! — SK Colors Photography',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f0f4ff; padding: 20px;">

          <div style="background: linear-gradient(135deg, #1E40AF, #3B82F6); padding: 30px 20px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 26px; letter-spacing: 1px;">📷 SK Colors Photography</h1>
            <p style="color: #BFDBFE; margin: 8px 0 0;">Capturing Life's True Colors</p>
          </div>

          <div style="background: white; padding: 35px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">

            <h2 style="color: #1E40AF; margin-top: 0;">Your Photos Are Ready! 🎉</h2>
            <p style="color: #374151;">Dear <strong>${gallery.clientName}</strong>,</p>
            <p style="color: #374151; line-height: 1.6;">
              Great news! Your photos from the <strong>${gallery.sessionType}</strong> session are now ready to view and download. We hope you love them!
            </p>

            <div style="background: #EFF6FF; padding: 16px 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #1E40AF;">
              <h3 style="color: #1E40AF; margin: 0 0 10px;">📋 Session Details</h3>
              <p style="margin: 5px 0; color: #374151;"><strong>Session Type:</strong> ${gallery.sessionType}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Session Date:</strong> ${gallery.sessionDate}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Total Photos:</strong> ${gallery.photos.length} photos</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Gallery Expires:</strong> ${new Date(gallery.expiryDate).toDateString()}</p>
            </div>

            <div style="background: #1E3A8A; padding: 20px 24px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #ffffff; margin: 0 0 14px; font-size: 16px;">🔐 Your Login Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #93C5FD; width: 100px;"><strong>Website:</strong></td>
                  <td style="padding: 6px 0; color: #ffffff;">
                    <a href="${process.env.CLIENT_URL}/gallery" style="color: #60A5FA;">${process.env.CLIENT_URL}/gallery</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #93C5FD;"><strong>Email:</strong></td>
                  <td style="padding: 6px 0; color: #ffffff;">${gallery.clientEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #93C5FD;"><strong>Password:</strong></td>
                  <td style="padding: 6px 0;">
                    ${tempPassword
                      ? `<span style="background: #0F172A; color: #60A5FA; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 16px; font-weight: bold; letter-spacing: 1px;">${tempPassword}</span>`
                      : `<span style="color: #93C5FD;">Use your existing password</span>`
                    }
                  </td>
                </tr>
              </table>
              ${tempPassword ? `<p style="color: #64748B; font-size: 12px; margin: 12px 0 0;">⚠️ Please save this password. We recommend changing it after your first login for security.</p>` : ''}
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.CLIENT_URL}/gallery"
                style="background: linear-gradient(135deg, #1E40AF, #3B82F6); color: white; padding: 14px 36px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block;">
                View My Photos →
              </a>
            </div>

            <div style="background: #FEF2F2; border: 1px solid #FECACA; padding: 12px 16px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #DC2626; margin: 0; font-size: 13px;">
                ⚠️ <strong>Important:</strong> Your gallery will expire on <strong>${new Date(gallery.expiryDate).toDateString()}</strong>.
                Please download all your photos before this date.
              </p>
            </div>

            <p style="color: #6B7280; font-size: 14px; margin-top: 20px;">
              If you have any questions contact us:
            </p>
            <p style="color: #374151; font-size: 14px;">
              📞 +94 77 123 4567 &nbsp;|&nbsp; ✉️ skcolorsstudio@gmail.com
            </p>

            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 24px 0;" />
            <p style="color: #9CA3AF; font-size: 12px; text-align: center; margin: 0;">
              © 2024 SK Colors Photography. All rights reserved.<br/>
              <em>Capturing Life's True Colors</em>
            </p>
          </div>
        </div>
      `,
    });

    console.log('Gallery notification email sent to:', gallery.clientEmail);
    gallery.notified = true;
    await gallery.save();

    res.json({ message: 'Client notified successfully' });
  } catch (error) {
    console.log('Notify error:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get client gallery
// @route   GET /api/gallery/my-gallery
// @access  Private/Client
const getMyGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findOne({
      clientEmail: req.user.email,
      isActive: true,
    });

    if (!gallery) {
      return res.status(404).json({ message: 'No gallery found' });
    }

    if (new Date() > new Date(gallery.expiryDate)) {
      return res.status(410).json({ message: 'Gallery has expired' });
    }

    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all galleries
// @route   GET /api/gallery
// @access  Private/Admin
const getAllGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find().sort({ createdAt: -1 });
    res.json(galleries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete photo from gallery
// @route   DELETE /api/gallery/:galleryId/photo/:photoId
// @access  Private/Admin
const deletePhoto = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.galleryId);
    if (!gallery) {
      return res.status(404).json({ message: 'Gallery not found' });
    }

    const photo = gallery.photos.id(req.params.photoId);
    if (!photo) {
      return res.status(404).json({ message: 'Photo not found' });
    }

    await cloudinary.uploader.destroy(photo.publicId);
    gallery.photos.pull(req.params.photoId);
    await gallery.save();

    res.json({ message: 'Photo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadPhotos,
  notifyClient,
  getMyGallery,
  getAllGalleries,
  deletePhoto,
};