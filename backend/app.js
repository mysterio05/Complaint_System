const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000; 


app.use(cors());          
app.use(express.json());  


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected successfully to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection failed error:", err));


app.get('/', (req, res) => {
  res.send("Server is up and running successfully!");
});


app.listen(port, () => {
  console.log(`Server is connected to port: ${port}`);
});