const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    return new Promise((resolve, reject) => {
        const dbURI = process.env.DB_URI ||"mongodb+srv://praneethchakka23:123_123@prototype.6ggzjad.mongodb.net/?retryWrites=true&w=majority&appName=prototype";
        if (!dbURI) {
            console.error("DB_URI is undefined. Check your .env file.");
            reject(new Error("DB_URI is undefined"));
            return;
        }
        console.log("Connecting to DB...", dbURI);
        mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.on('connected', () => {
            console.log("Connected to Database Successfully");
            resolve();
        });
        mongoose.connection.on('error', (err) => {
            console.error("Database connection error:", err);
            reject(err);
        });
    });
};