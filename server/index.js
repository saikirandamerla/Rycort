const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Set a port (you can change it)
const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb+srv://Rycort:Rycort@prototype.6ggzjad.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=prototype")
  .then(() => console.log("Connected to MongoDB (Cluster0)"))
  .catch((err) => console.error("MongoDB connection error:", err));
// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("mongoose is running");
});
