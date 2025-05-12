const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://saikiran:passw0rd@prototype.6ggzjad.mongodb.net/?retryWrites=true&w=majority&appName=prototype';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Mongoose User Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});
schooladd=require("./adminaddingpage")
app.use('/api/schools', schooladd);
app.use('api/attendance',require('../server/components/attendence'))
// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
