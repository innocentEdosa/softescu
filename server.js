const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/src')));
app.use(express.static(`${__dirname}/dist`));

app.get('/main-bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'main-bundle.js'));
});
app.use('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

const port = process.env.PORT || 5799;

app.listen(port, () => {
  console.log(`i am running on ${port}`);
});
