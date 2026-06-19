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
        const updated = await User.findByIdAndUpdate(
            req.user._id,
            { name, email },
            { new: true, runValidators: true }
        ).select('-password');
        res.json({ message: 'Profile updated successfully', user: updated });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;