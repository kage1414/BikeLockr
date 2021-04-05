const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const pathName = path.join(__dirname, '/../client/dist');

app.use(express.static(pathName));

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});