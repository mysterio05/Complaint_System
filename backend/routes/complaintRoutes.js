const express = require('express');
const router = express.Router();
const Complaint = require('../models/complaintModels');

router.get('/mycomplaints/:userId', async (req, res) => {
    try {

        const complaints = await Complaint.find({
            createdBy: req.params.userId
        });

        res.json(complaints);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get('/:id', async (req, res) => {

    try {

        const complaint = await Complaint.findById(
            req.params.id
        );

        res.json(complaint);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;