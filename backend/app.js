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