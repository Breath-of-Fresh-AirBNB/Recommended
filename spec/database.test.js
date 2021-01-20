const mongoose = require('mongoose');
// const db = require('../database/index.js');
const Home = require('../database/homeSchema.js');
const Activity = require('../database/activitySchema.js');

describe('Database Seeding', () => {
  test('Should have 100 home records', () => {
    Home.find({})
      .then((homes) => {
        expect(homes).toHaveLength(100);
      });
  });
  test('Should not find records with undefined as the homeId', () => {
    Home.find({ homeId: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the destination', () => {
    Home.find({ destination: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the imageUrl', () => {
    Home.find({ imageUrl: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the accommodation', () => {
    Home.find({ accommodation: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the beds', () => {
    Home.find({ beds: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the reviews', () => {
    Home.find({ reviews: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the averageRating', () => {
    Home.find({ averageRating: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the rate', () => {
    Home.find({ rate: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the relatedDestinations', () => {
    Home.find({ relatedDestinations: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should have 100 activity records', () => {
    Activity.find({})
      .then((activities) => {
        expect(activities).toHaveLength(100);
      });
  });
});

afterAll(() => {
  mongoose.disconnect();
});
