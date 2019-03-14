const genre = document.getElementById('myform');
let rightSelect = document.getElementById("tohide");
/* rightSelect.options.length=0; */
let display = document.querySelector(" div h3");


let genres = [
  ["scifi", "Moon", "2001 Space odessy", "Contact",], 
  ["drama", "Darkest hour", "There will be blood", "American beauty"], 
  ["comedy", "Airplane!", "Deadpool", "Wayne's World"]
];

genre.addEventListener('change', () => {
  while (rightSelect.childElementCount > 1) {
    rightSelect.removeChild(rightSelect.lastChild)
  }
  genres.forEach(list => {
    if (list[0] === genre.value) {
      list.forEach(element => {
        if (list.indexOf(element) !== 0) {
          let newElement = document.createElement('option');
          newElement.setAttribute('value', element);
          newElement.innerText = element;
          rightSelect.appendChild(newElement);
        }
      });
    }
  });
});

rightSelect.addEventListener('change', () => {
  display.innerText = `The selected movie is: ${rightSelect.value}`
});



/* genres.addEventListener('change', (e) => {
  console.log(`e.target.value = ${ e.target.value }`);
  console.log(`genres.options[genres.selectedIndex].value = ${ genres.options[genres.selectedIndex].value }`);
  if (genres.options[genres.selectedIndex].value === "drama") {
  let option1 = document.createElement("option");
  option1.text = "Moon";
  option1.value = "moon";
  let select = document.getElementById("tohide");
  select.appendChild(option1);
  let option2 = document.createElement("option");
  option2.text = "Darkest Hour";
  option2.value = "darkest";
  document.getElementById("tohide");
  select.appendChild(option2);
  let option5 = document.createElement("option");
  option5.text = "Wayne's World";
  option5.value = "darkest";
  document.getElementById("tohide");
  select.appendChild(option5);
  movieDisplay.textContent = e.target.value;
  }
  if (genres.options[genres.selectedIndex].value === "scifi") {
    let option3 = document.createElement("option");
    option3.text = "2001: Space Odysey";
    option3.value = "space";
    let select = document.getElementById("tohide");
    select.appendChild(option3);
    let option4 = document.createElement("option");
    option4.text = "Deadpool";
    option4.value = "deadpool";
    select.appendChild(option4);
    }

    if (genres.options[genres.selectedIndex].value === "comedy") {
      let option1 = document.createElement("option");
      option1.text = "Airplane";
      option1.value = "airplane";
      let select = document.getElementById("tohide");
      select.appendChild(option1);
}}
); */