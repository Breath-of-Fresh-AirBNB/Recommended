const mongoose = require('mongoose');
// const db = require('./index.js');
mongoose.Promise = global.Promise;

const homeSchema = new mongoose.Schema({
  homeId: Number,
  name: String,
  destination: String,
  image: String,
  accommodationType: String,
  beds: Number,
  reviews: Number,
  averageRating: Number,
  rate: Number,
  relatedDestinations: [String],
});

const activitySchema = new mongoose.Schema({
  activityId: Number,
  name: String,
  destination: String,
  image: String,
  reviews: Number,
  averageRating: Number,
  rate: Number,
});

const Home = mongoose.model('Home', homeSchema);
const Activity = mongoose.model('Activity', activitySchema);

module.exports = Home;
module.exports = Activity;
