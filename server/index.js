const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const Controller = require('./controller.js');
const controller = new Controller();
const bodyParser = require('body-parser');

const pathName = path.join(__dirname, '/../client/dist');

app.use(express.static(pathName));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/theft', controller.theft);

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});