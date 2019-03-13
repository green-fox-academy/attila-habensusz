const genres = document.getElementById('myform');
let rightSelect = document.getElementById("tohide");
rightSelect.options.length=0;



genres.addEventListener('change', (e) => {
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
);