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

app.use(express.static("public"));

app.use(express.json());


////////////////////// HELPER FUNCTIONS AT BOTTOM //////////////////////////////

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/api/game', (req, res) => {
  conn.query("SELECT * FROM questions;", (err, rows1) => {
    if (err) {
      console.error(err);
    } else if (rows1.length > 0) {
      let numberOfQuestions = rows1.length;
      let randomQuestions = rows1[getRandom(numberOfQuestions)];
      conn.query(`SELECT * FROM answers WHERE question_id = '${randomQuestions['id']}';`,
    (err, rows2) => {
      if (err) {
        console.error(err);
      } else {
        res.send(displayQuestion(randomQuestions, rows2));
      }
    },
  );
    } else {
      res.status(404).send();
    }
  });
});

 app.get('/api/questions', (req, res) => {
   conn.query('SELECT * FROM questions;',
  (err, rows) => {
    if (err) {
      console.error(err);
    } else if (rows.length > 0) {
      res.status(200).send(rows);
    } else {
      res.status(404).send();
    }
  },
  );
 });

app.post('/api/questions', (req, res) => {
  let data = req.body;
  conn.query(`INSERT INTO questions (question) VALUES ('${data.question}');`,
(err, rows1) => {
  if (err) {
    console.error(err);
  } else {
    data.answers.forEach((stuff) => {
      conn.query(`INSERT INTO answers (question_id, answer, is_correct)
      VALUES (${rows1["insertId"]}, '${stuff.answer}', '${stuff.is_correct}');`,
    (err, rows2) => {
      if (err) {
        console.error(err);
      }
    })
    });
  } res.status(200).send('Done');
})
})

app.delete('/api/questions/:id', (req, res) => {
  let id = req.params.id;
  conn.query(`SELECT * FROM questions WHERE id = '${id}'`, 
(err, rows) => {
  if (err) {
    console.error(err);
  } else if (rows.length < 1) {
    res.status(404).send();
  } else if ( rows.length > 0) {
    deleteIt(id, res);
  } else {
    res.status(500).send();
  }
})
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



/////////////////////////////////////////// HELPER FUNCTIONS ////////////////////////////////////////////////////

let getRandom = (length) => {
  return Math.floor(Math.random() * length);
}

let displayQuestion = (question, answers) => {
  let responseObject = {
    'id': question.id,
    'question': question.question,
    'answers': answers
  }
  return responseObject;
}

let deleteIt = (id, res) => {
  conn.query(`DELETE FROM questions WHERE id = '${id}';`,
(err, rows) => {
  if (err) {
    console.error(err);
  } else {
    res.status(204).send();
  }
})
}
