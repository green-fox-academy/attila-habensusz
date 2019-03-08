'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json()); 
const path = require('path');
require('dotenv').config();
let mysql = require("mysql");


const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use("/public", express.static("public"));

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('`<h1>Hello, world</h1>`');
});

app.get("/post", (req, res) => {
  conn.query("SELECT * FROM post;", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    
  });
});

app.post("/posts", (req, res) => {
  /* let userID = req.body.userID;
  let title = req.body.title;
  let url = req.body.url; */
  conn.query(`INSERT INTO post (user_id, title, url) VALUES (${req.body.user_id}, '${req.body.title}', '${req.body.url}');`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

app.put('/post/:id/upvote', (req, res) => {
  conn.query(`UPDATE post SET score = score + 1 WHERE post_id=${req.params.id};`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  })
})

app.put('/post/:id/downvote', (req, res) => {
  conn.query(`UPDATE post SET score = score - 1 WHERE post_id=${req.params.id};`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

