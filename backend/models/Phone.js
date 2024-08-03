const mongoose = require('mongoose');

// Define schema for the 'body' field of the phone
const bodySchema = new mongoose.Schema({
  dimensions: String,
  weight: String,
  sim: String,
  build: String
});

const launchSchema = new mongoose.Schema({
  announced: String,
  status: String,

})
const displaySchema = new mongoose.Schema({
  type: String,
  size: String,
  resolution: String,

})
const platformSchema = new mongoose.Schema({
  os: String,
  chip: String,
  cpu: String,
  gpu: String,

})

const phoneSchema = new mongoose.Schema({
  name: String,
  picture: String,
  price: Number,
  network: String,
  launch: launchSchema,
  body: bodySchema,
  display: displaySchema,
  platform: platformSchema,
  thumbnail: String 
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
