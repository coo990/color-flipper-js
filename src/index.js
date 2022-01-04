const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Target the button class
const btn = document.getElementById('btn');
// Target color span class
const color = document.querySelector('.color');

// Set up logic when button clicked
btn.addEventListener('click', function(){
  // get random number between 0 - 3 from colors array
  const randomNumber = 2;
  // targets background color and changes when function clicked
  document.body.style.backgroundColor = colors[randomNumber];
  // changes span text
  color.textContent = colors[randomNumber];
});

