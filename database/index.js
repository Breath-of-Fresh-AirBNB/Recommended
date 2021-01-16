const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/airbnb';

const db = mongoose.connection(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
