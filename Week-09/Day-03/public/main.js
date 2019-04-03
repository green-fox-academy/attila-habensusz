let question = document.querySelector('#question');
let answers = document.querySelectorAll('.button');
let container = document.querySelector('.container');
let score = document.querySelector('#score');
let scoreAmount = 0;


window.onload = () => {
  giveQuestion();
}

const addClickEvent = () => {
  container.addEventListener('click', checkIfTrue);
}

let checkIfTrue = (e) => {
  if (e.target.classList.contains('wrong') === true) {
    e.target.style.background = 'red';
  } else {
    e.target.style.background = 'green';
    scoreAmount++;
  }

  answers.forEach(e => {
    if (e.classList.contains('correct')) {
      e.style.background = 'green';
    }
  })

  container.removeEventListener('click', checkIfTrue);
  setTimeout(giveQuestion, 3000);
}


/* function giveQuestion() {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', '/api/game', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify({ "url": url.value, "alias": alias.value }));

  httpRequest.onload = (loadEvent) => {
    let data = JSON.parse(http.responseText);
    let status = loadEvent.target.status || 0;
    if (status === 200) {
      question.innerText = data[0].question;
    } else {
      console.log('No response');
    }
  }
} */


const giveQuestion = () => {
  let URL = '/api/game';
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderHTML(data);
      addClickEvent();
    })
    .catch(error => console.error(error.message));
}

const renderHTML = (data) => {
  score.textContent = `SCORE: ${scoreAmount}`;
  question.textContent = data.question;
  answers.forEach((e, i) => {
    e.textContent = data.answers[i][`answer`];
    e.className = '';
    e.classList.add(data.answers[i]['is_correct'] === 0 ? 'wrong' : 'correct');
    e.style.background = '#3498DB';
    e.classList.add("button");
    
  })
}