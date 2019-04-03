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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

/* app.get('/api/links', (request, response) => {
  conn.query('SELECT id, url, alias, hitCount FROM shorturl', (err, data) => {
    if (err) {
      response.status(500).json(err);
    };
    response.status(200).json(data);
  });
}); */

/* app.post("/api/links", (req, res) => {
  conn.query("SELECT * FROM shorturl;", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    
  });
}); */

/*app.post("/api/links", (req, res) => {
   conn.query(`INSERT INTO shorturl (url, alias, hitCount, secretCode) VALUES (${req.body.url}, '${req.body.alias}', '${req.body.hitCount}', '${req.body.secretCode}');`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows); */
  /* }); */
/* }); */

app.post('/api/links', (req, res) => {
  let inputUrl = req.body.url;
  let inputAlias = req.body.alias;
  let secretCode = req.body.secretCode;


  conn.query(`SELECT alias FROM shorturl;`,  (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }

    if (rows.some(oneRowObject => oneRowObject.alias === inputAlias) === true) {
      res.status(400).send();
    } else {
      conn.query(`INSERT INTO shorturl (url, alias, secretcode) VALUES ('${inputUrl}', '${inputAlias}', ${secretCode});`, (error, rows) => {
        if (error) {
          console.log(error);
          res.status(500).send();
          return;
        }
        res.send(rows);

        conn.query(`SELECT * FROM shorturl WHERE alias='${inputAlias}';`, (error, rows) => {
          if (error) {
            console.log(error);
            res.status(500).send();
            return;
          }
          res.send(rows);
        });
      });
    }
  });
});

app.get('/a/:alias', (req, res) => {
  let inputAlias = req.params.alias;

  conn.query(`SELECT alias FROM shorturl;`,  (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }

    if (rows.some(oneRowObject => oneRowObject.alias === inputAlias) === false) {
      res.status(404).send();
    } else {
      conn.query(`UPDATE shorturl SET hitcount = hitcount + 1 WHERE alias = '${inputAlias}';`,  (error, rows) => {
        if (error) {
          console.log(error);
          res.status(500).send();
          return;
        }

        conn.query(`SELECT url FROM shorturl WHERE alias = '${inputAlias}';`, (error, rows) => {
          if (error) {
            console.log(error);
            res.status(500).send();
            return;
          }
          res.redirect(rows[0].url);
        });
      });
    }
  });
});

app.get('/api/links', (req, res) => {
  conn.query(`SELECT id, url, alias, hitcount FROM shorturl;`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.json(rows);
    });
});

app.delete('/api/links/:id', (req, res) => {
  let inputId = req.params.id;
  let inputSecretCode = req.body.secretCode;
  conn.query(`SELECT * FROM shorturl WHERE id = ${inputId};`, (error, rows) => {
      if (error) {
        console.log(error);
        res.status(500).send();
        return;
      }
      
      if (rows.length < 1) {
        res.status(404).send();
      } else if (rows.length > 0 && rows[0].secretcode !== inputSecretCode) {
        res.status(403).send();
      } else if (rows.length > 0 && rows[0].secretcode === inputSecretCode) {
        conn.query(`DELETE FROM shorturl WHERE id=${inputId};`, (error, rows) => {
          if (error) {
            console.log(error);
            return;
          }
          res.status(204).send();
        });
      } else {
        res.status(500).send();
      }
  });
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


