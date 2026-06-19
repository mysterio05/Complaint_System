const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    location: String,
    status:String,
    resolutionDetails: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Complaint", complaintSchema);