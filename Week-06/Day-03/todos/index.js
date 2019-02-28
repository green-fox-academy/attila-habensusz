const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
// endpoint with param
app.get('/', (req, res) => {
  const todos = [
    { item: 'get up' },
    { item: 'survive'},
    { item: 'go back to bed'},
  ];

  res.render('home', {
    todos: todos
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});