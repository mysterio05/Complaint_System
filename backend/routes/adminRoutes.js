const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Filter Complaints API
router.get('/complaints', async (req, res) => {
    try {
        const { category, status, date } = req.query;
        let filter = {};

        if (category) filter.category = category;
        if (status) filter.status = status;
        if (date) filter.createdDate = {
            $gte: new Date(date),
            $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1))
        };

        const complaints = await Complaint.find(filter);
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get Single Complaint API
router.get('/complaints/:id', async (req, res) => {
    try {
        const complaint = await Complaint.findById(req.params.id);
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        res.json(complaint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update Status API
router.put('/complaints/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await Complaint.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;