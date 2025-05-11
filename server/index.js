require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const dB = require('./config/connectDB');

// Set a port (you can change it)
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
dB();
// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
