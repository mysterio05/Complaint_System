const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Complaint = require('./models/Complaint');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection failed:", err));

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.get('/api/complaints', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch" });
  }
});

app.get('/api/complaints/user/:userId', async (req, res) => {
  try {
    const complaints = await Complaint.find({
      $or: [
        { user: req.params.userId },
        { createdBy: req.params.userId }
      ]
    });
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user complaints" });
  }
});

app.get('/api/complaints/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    res.status(200).json(complaint);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch complaint" });
  }
});

app.post('/api/complaints', async (req, res) => {
  try {
    const { title, category, description, location, user, createdBy } = req.body;
    const finalUser = user || createdBy;
    const finalCreatedBy = createdBy || user;
    const newComplaint = new Complaint({
      title,
      category,
      description,
      location,
      user: finalUser,
      createdBy: finalCreatedBy
    });
    await newComplaint.save();
    res.status(201).json(newComplaint);
  } catch (err) {
    res.status(400).json({ error: "Failed to save" });
  }
});

app.put('/api/complaints/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ error: "Complaint not found" });
    }
    if (complaint.status !== 'Pending') {
      return res.status(400).json({ error: "Complaint cannot be edited after review" });
    }
    const { _id, status, ...updateData } = req.body;
    const updatedComplaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { ...updateData, status: 'Pending' },
      { new: true }
    );
    res.status(200).json(updatedComplaint);
  } catch (err) {
    res.status(400).json({ error: "Failed to update complaint" });
  }
});

app.delete('/api/complaints/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ error: "Complaint not found" });
    }
    if (complaint.status !== 'Pending') {
      return res.status(400).json({ error: "Complaint cannot be deleted after review" });
    }
    await Complaint.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Complaint deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));