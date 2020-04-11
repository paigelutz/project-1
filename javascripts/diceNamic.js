// jshint esversion: 7

//define helper functions here

let rollDie = () => {
    return Math.floor (Math.random() * 6) + 1;
};

//Define a controller to handle the button click
let controller = () => {
  let target, die1, die2, rollCount = 0,
    die1URL, die2URL, imgElem1, imgElem2, cheeryMsg;

//get the target number from the web page
target = document.querySelector("input").value;
console.log(target);

//roll the target number (and count the rolls)
do {
  //roll the dice
  die1 = rollDie();
  die2 = rollDie();
  ++rollCount;
  //increment the roll counter

  //log the dice and the counter
  console.log(`${die1} ${die2} ${rollCount}`);

} while (die1 + die2 != target);

//update images on web page
die1URL = `images/die${die1}.gif`;
imgElem1 = document.querySelectorAll("img")[0];
imgElem1.setAttribute("src", die1URL);

die2URL = `images/die${die2}.gif`;
imgElem2 = document.querySelectorAll("img")[1];
imgElem2.setAttribute("src", die2URL);

//display number of rolls on the web page

cheeryMsg = `You hit your number in ${rollCount} roll${(rollCount == 1)?"":"s"}!`;
document.querySelector("div").innerHTML = cheeryMsg;
};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
