'use strict';

const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (res, req) => {
  res.sendFile('index.html');
});

app.post('/signup', (req, res) => {
  res.send(`<h1>Thanks, ${req.body.user}, your password is ${req.body.password}</h1>`);
});


app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});