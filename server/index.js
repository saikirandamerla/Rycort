const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://saikiran:passw0rd@prototype.6ggzjad.mongodb.net/?retryWrites=true&w=majority&appName=prototype';
const PORT = process.env.PORT || 3000;
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

// checking Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

//Dhanesh routes
schooladd=require("./config/adminaddingpage")
login=require('../server/components/login')
app.use('/api/schools', schooladd);
app.use('/api/attendance',require('../server/components/attendence'))
app.use('/api/login',login)




//Praneeth routes
app.use('/api/school',require('./components/school')) //only admin can add school - automaticallly classes are added
app.use('/api/teacher',require('./components/teacher'))

// Server start

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
