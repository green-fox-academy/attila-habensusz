const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
// endpoint with param
app.get('/?name/:name', (req, res) => {
  res.send(`<h1>Hi, ${req.params.name}</h1>`);
});

app.get('/', (req, res) => {
  res.render('home', {
    greet: 'Hello, Guest!',
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});