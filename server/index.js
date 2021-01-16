import express from 'express';

const bodyParser = require('body-parser');

const app = express();
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 2222;

app.get('/', (req, res) => {
  res.send('got it');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}!`);
});
