const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true, useUnifiedTopology: true });

const Home = mongoose.model('Home', {
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

const Activity = mongoose.model('Activity', {
  activityId: Number,
  name: String,
  destination: String,
  image: String,
  reviews: Number,
  averageRating: Number,
  rate: Number,
});
