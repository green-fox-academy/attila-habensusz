const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;


app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.use(express.json()); // json parser middleware

app.get('/doubling', (req, res) => {
  if(req.query.input){
    res.json({
    "received": req.query.input,
    "result": req.query.input * 2
    })
  } else {
    res.json({
      "error": "Please provide an input!"
    })
  }
});

app.get('/greeter', (req, res) => {
  if(req.query.name && req.query.title){
    res.json({
        "welcome_message": `Oh, hi there ${req.query.input}, my dear ${req.query.title}!`
    })
  } else if (req.query.name && req.query.title === undefined) {
    res.json({
      "error": "Please provide a title!"
    });
  } else if (req.query.name === undefined && req.query.title) {
    res.json({
      "error": "Please provide a name!"
    });
  } else {
    res.json({
      "error": "Please provide a name and a title!"
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  if(req.params) {
    res.json({
      "appended": `${req.params.appendable}a`
    });
  } else {
    res.status(404).send();
  }
});

app.post('/dountil/:action', (req, res) => {
  let stuff = req.body;
  let storedParam = req.params.action;

  if(storedParam === 'sum'){
      res.json({
        result: sum(stuff.until)
      });
    } else if (storedParam === "factor") {
      res.json({
        result: factorial(stuff.until)
      });
    }

  
    function sum(num){
      let result = 0;
      for (let i = 0; i<= num; i++) {
        result+= i;
      }
      return result
    }

    function factorial(num) {
      if(num === 0){
        return 1;
      } else {
        return num * factorial(num - 1);
      }
    }

  

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});