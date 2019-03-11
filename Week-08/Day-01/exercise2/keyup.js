window.addEventListener('keyup', function(e){
  let h1 = document.getElementsByTagName('h1')[0];
  h1.innerText = `Last pressed key is: ${e.code}`;
})