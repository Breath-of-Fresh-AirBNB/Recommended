import express from 'express';

const bodyParser = require('body-parser');
const Home = require('../database/homeSchema.js');
const Activity = require('../database/activitySchema.js');

const app = express();
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 2222;

app.get('/', (req, res) => {
  res.send('got it');
});

app.get('/homes', (req, res) => {
  Home.find({})
    .then((homes) => {
      res.status(200).send(homes);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/activities', (req, res) => {
  Activity.find({})
    .then((homes) => {
      res.status(200).send(homes);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}!`);
});
