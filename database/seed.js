const db = require('./index.js');

const Home = require('./schema.js');

const Activity = require('./schema.js');

const sampleHomes = [];

const sampleActivities = [];

const insertSampleHomes = () => {
  Home.create(sampleHomes)
    .then(() => db.disconnect());
};
insertSampleHomes();

const insertSampleActivities = () => {
  Activity.create(sampleActivities)
    .then(() => db.disconnect());
};
insertSampleActivities();
