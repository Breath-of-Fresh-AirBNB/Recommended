const faker = require('faker');
const mongoose = require('mongoose');
// const db = require('./index.js');
const Home = require('./homeSchema.js');
const Activity = require('./activitySchema.js');

const createSampleHomes = () => {
  const sampleHomes = [];

  for (let i = 1; i <= 100; i += 1) {
    let averageRating = Math.random() * (5 - 1) + 1;
    averageRating = parseFloat(averageRating).toFixed(2);
    averageRating = Number(averageRating);

    const descriptors = ['Rustic', 'Spacious', 'Modern', 'Glamorous', 'Historic', 'Green', 'Luxurious', 'Peaceful', 'Secluded', 'Charming', 'Comfortable', 'Welcoming', 'Upscale', 'Rare', 'Beachfront', 'Waterfront'];

    const types = ['House', 'Apartment', 'B&B', 'Bungalow', 'RV', 'Cabin', 'Chalet', 'Cottage', 'Guest Suite', 'Guest House', 'Hostel', 'Lodge', 'Loft', 'Resort', 'Townhouse', 'Villa'];

    const homeName = `${descriptors[Math.floor(Math.random() * descriptors.length)]} ${types[Math.floor(Math.random() * types.length)]}`;

    const cities = ['Denver', 'London', 'Paris', 'Rome', 'Lisbon'];
    const city = cities[Math.floor(Math.random() * cities.length)];

    const roomTypes = ['Entire Place', 'Private Room', 'Hotel Room', 'Shared Room'];

    const relatedDestinations = {
      Denver: ['Colorado Springs', 'Boulder', 'Fort Collins', 'Nederland', 'Estes Park', 'Golden', 'Breckenridge', 'Aurora', 'Winter Park', 'Vail', 'Downtown Denver', 'Keystone'],
      London: ['Central London', 'Costwold District', 'Le Touquet', 'Brighton', 'Bournemouth', 'Bristol', 'Cambridge', 'Bath', 'De Panne', 'Oxford', 'Birmingham', 'Ètretat'],
      Paris: ['Rouen', 'Èterat', 'Dijon', 'Reims', 'Le Touquet', 'Ghent', 'Honfleur', 'Lille', 'Brussels', 'Deauville', 'De Panne', 'Ostend'],
      Rome: ['Ischia', 'Elba', 'Rimini', 'Naples', 'Positano', 'Pisa', 'Capri', 'Amalfi', 'Olbia', 'Sorrento', 'FLorence', 'Bologna'],
      Lisbon: ['Costa da Caparica', 'Sagres', 'Porto', 'Sintra', 'Albufeira', 'Seville', 'Ericeira', 'Faro', 'Cádiz', 'Comporta', 'Armona Island', 'Tarifa'],
    };

    const newHome = {
      homeId: i,
      name: homeName,
      destination: city,
      imageUrl: faker.image.city(),
      accommodationType: roomTypes[Math.floor(Math.random() * roomTypes.length)],
      beds: Math.floor(Math.random() * (15) - 1) + 1,
      reviews: Math.floor(Math.random() * (1000) - 0) + 0,
      averageRating,
      rate: Math.floor(Math.random() * (2000 - 13) + 13),
      relatedDestinations: relatedDestinations[city],
    };

    sampleHomes.push(newHome);
  }
  return sampleHomes;
};

const createSampleActivities = () => {
  const sampleActivities = [];

  for (let i = 1; i <= 100; i += 1) {
    let averageRating = Math.random() * (5 - 1) + 1;
    averageRating = parseFloat(averageRating).toFixed(2);
    averageRating = Number(averageRating);

    const cities = ['Denver', 'London', 'Paris', 'Rome', 'Lisbon'];

    const city = cities[Math.floor(Math.random() * cities.length)];

    const verbs = ['Discover', 'Explore', 'Tasting', 'Walking Tour of', 'The Nightlife of', 'Historic', 'Secrets of', 'Street Art of', 'The Best of'];

    const newActivity = {
      activityId: i,
      name: `${verbs[Math.floor(Math.random() * verbs.length)]} ${city}`,
      destination: city,
      imageUrl: faker.image.sports(),
      reviews: Math.floor(Math.random() * (1000) - 0) + 0,
      averageRating,
      rate: Math.floor(Math.random() * (2000 - 13) + 13),
    };

    sampleActivities.push(newActivity);
  }
  return sampleActivities;
};

const sampleHouses = createSampleHomes();
const sampleActivities = createSampleActivities();

const insertSamples = () => {
  Home.create(sampleHouses)
    .then(() => Activity.create(sampleActivities))
    .then(() => mongoose.disconnect())
    // eslint-disable-next-line no-console
    .catch((err) => console.log('error: ', err));
};
insertSamples();
