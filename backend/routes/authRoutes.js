const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const User = require('../models/User');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', protect, (req, res) => {
    res.json({
        message: "Welcome to your profile.",
        user: req.user
    });
});

// Update profile (name and email only)
router.put('/profile', protect, async (req, res) => {
    try {
        const { name, email } = req.body;

        // Check if email is taken by another user
        if (email !== req.user.email) {
            const existing = await User.findOne({ email });
            if (existing) {
                return res.status(400).json({ message: 'Email is already in use by another account.' });
            }
        }

        const updated = await User.findByIdAndUpdate(
            req.user._id,
            { $set: { name, email } },
            { new: true }
        ).select('-password');

        res.json({ message: 'Profile updated successfully', user: updated });
    } catch (error) {
        console.error('Profile update error:', error.message);
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;