const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require("./routes")

dotenv.config(); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

app.get('/', (req, res) => {
  res.send("Welcome to Backend");
});

app.use('/api/user', User)

// MongoDB connection
mongoose.connect(MONGO_URL)
.then(() => {
  console.log("✅ MongoDB Connection Successful");
})
.catch((error) => {
  console.error("❌ MongoDB Connection Failed:", error);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
