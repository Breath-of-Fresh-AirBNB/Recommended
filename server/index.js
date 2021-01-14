import express from 'express';

const app = express();
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('got it');
});

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 4000!');
});
