const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const homeSchema = new mongoose.Schema({
  homeId: Number,
  name: String,
  destination: String,
  imageUrl: String,
  accommodation: String,
  bed: Number,
  reviews: Number,
  averageRating: Number,
  rate: Number,
  related: [String],
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
