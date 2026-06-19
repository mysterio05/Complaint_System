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
    const complaints = await Complaint.find({ user: req.params.userId });
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
    const { title, category, description, location, user } = req.body;
    const newComplaint = new Complaint({ title, category, description, location, user });
    await newComplaint.save();
    res.status(201).json(newComplaint);
  } catch (err) {
    res.status(400).json({ error: "Failed to save" });
  }
});

app.put('/api/complaints/:id', async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    const updatedComplaint = await Complaint.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.status(200).json(updatedComplaint);
  } catch (err) {
    res.status(400).json({ error: "Failed to update complaint" });
  }
});

app.delete('/api/complaints/:id', async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Complaint deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));