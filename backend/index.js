const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Phone = require('./models/Phone');


// Creating an Express application instance
const app = express();

// Defining the port number for the server
const port = 3000;

dotenv.config(); 

app.use('/assets', express.static('assets'));

app.use(cors());
app.use(express.json());

// MongoDB connection URL from environment variables
const DB_URL = process.env.MONGODB_URI;

// API endpoint to get phone details based on name query
app.get('/api/phones', async (req, res) => {
  const name = req.query.name;
  try {
    const phone = await Phone.findOne({ name: new RegExp(name, 'i') });
    res.json(phone);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API endpoint to create a new phone entry
app.post('/api/phones', async (req, res) => {
  const { name, picture, price, network, launch, body,display,platform,thumbnail } = req.body;
  const phone = new Phone({ name, picture, price, network, launch, body, display,platform,thumbnail });
  try {
    await phone.save();
    res.status(201).json(phone);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Starting the Express server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Connecting to MongoDB database
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('DB Connection Error', err);
  });