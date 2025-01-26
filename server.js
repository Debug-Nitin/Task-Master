const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db') 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('Task Tracker Backend is running and connected to MongoDB!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});