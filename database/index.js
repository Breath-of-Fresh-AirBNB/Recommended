/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoUri = 'mongodb://localhost/airbnb';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected'))
  .catch((err) => console.log('not connected', err));

module.exports = db;
