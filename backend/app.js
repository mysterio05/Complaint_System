const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const adminRoutes = require('./routes/adminRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log("Server running on port: ", port);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed: ", error.message);
    });
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const Complaint = require('./models/Complaint'); 

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected successfully to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection failed error:", err));

// Auth Routes
app.use('/api/auth', authRoutes);

// Base Route
app.get('/', (req, res) => {
    res.send('Complaint System Backend API is running smoothly...');
});

// Complaint Routes
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

// Start Server
app.listen(port, () => {
  console.log(`Server is connected to port: ${port}`);
});
