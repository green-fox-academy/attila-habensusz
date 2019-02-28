'use strict';

const express = require('express'); // import express
const app = express(); // save express() to variable
const PORT = 3000; // set port of our server
const path = require('path');


app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});