const express = require('express');
const app=express();
const port=5000;
const cors=require('cors')
app.use(cors())
const userRoutes=require('./routes/userRoutes');
const complaintRoutes=require('./routes/complaintRoutes');
const userModels=require('./models/userModels');
const complaintModels=require('./models/complaintModels');
app.use('/complaints', complaintRoutes);
const connectDB=require('./db');
require('dotenv').config();

app.use(express.json());
connectDB();
app.use('/',userRoutes); 
app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})