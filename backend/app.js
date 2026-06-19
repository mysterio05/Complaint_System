require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 5000;

const mongoose = require('mongoose');
const Complaint = require('./models/Complaint'); 

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Complaint System Backend API is running smoothly...');
});

app.listen(port, () => {
    console.log("Connected to port:", port);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected successfully to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection failed error:", err));

app.get('/api/complaints', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch complaints" });
  }
});

app.get('/api/complaints/user/:userId', async (req, res) => {
  try {
    const complaints = await Complaint.find({ userId: req.params.userId });
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
    const newComplaint = new Complaint(req.body);
    await newComplaint.save();
    res.status(201).json(newComplaint);
  } catch (err) {
    res.status(400).json({ error: "Failed to save complaint" });
  }
});

app.put('/api/complaints/:id', async (req, res) => {
  try {
    const updatedComplaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    res.status(500).json({ error: "Failed to delete complaint" });
  }
});

app.listen(port, () => {
  console.log(`Server is connected to port: ${port}`);
});