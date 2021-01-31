const express = require('express');
const gzipStatic = require('connect-gzip-static');
const cors = require('cors');

const bodyParser = require('body-parser');
const Home = require('../database/homeSchema.js');
const Activity = require('../database/activitySchema.js');

const app = express();

app.use(cors());
app.use(gzipStatic('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/homes/:id', (req, res) => {
  Home.find({ homeId: req.params.id })
    .then((home) => {
      Home.find({ destination: home[0].destination })
        .then((homes) => {
          res.setHeader('Cache-Control', 'public, max-age=31557600');
          res.status(200).send(homes);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/activities/:id', (req, res) => {
  Home.find({ homeId: req.params.id })
    .then((home) => {
      Activity.find({ destination: home[0].destination })
        .then((activities) => {
          res.setHeader('Cache-Control', 'public, max-age=31557600');
          res.status(200).send(activities);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = app;
