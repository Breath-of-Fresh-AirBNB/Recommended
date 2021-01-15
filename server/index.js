import express from 'express';

const app = express();
app.use(express.static('dist'));

const port = 3001;

app.get('/', (req, res) => {
  res.send('got it');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}!`);
});
