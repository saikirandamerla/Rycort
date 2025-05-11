require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const cors = require("cors");
const dB = require('./config/connectDB');

// Middleware
app.use(express.json());
app.use(cors());

//Importing Env variables
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
dB();
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
