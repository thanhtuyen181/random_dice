/* Change first image */
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var newImage1 = "";
if (randomNumber1 == 1) {
    newImage1 = "./images/dice1.png";
} else if (randomNumber1 == 2) {
    newImage1 = "./images/dice2.png";
} else if (randomNumber1 == 3) {
    newImage1 = "./images/dice3.png";
} else if (randomNumber1 == 4) {
    newImage1 = "./images/dice4.png";
} else if (randomNumber1 == 5) {
    newImage1 = "./images/dice5.png";  
} else if (randomNumber1 == 6) {
    newImage1 = "./images/dice6.png"; 
}

document.querySelector(".img1").setAttribute("src", newImage1);

/* Change second image */
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var newImage2 = "";
if (randomNumber2 == 1) {
    newImage2 = "./images/dice1.png";
} else if (randomNumber2 == 2) {
    newImage2 = "./images/dice2.png";
} else if (randomNumber2 == 3) {
    newImage2 = "./images/dice3.png";
} else if (randomNumber2 == 4) {
    newImage2 = "./images/dice4.png";
} else if (randomNumber2 == 5) {
    newImage2 = "./images/dice5.png";  
} else if (randomNumber2 == 6) {
    newImage2 = "./images/dice6.png"; 
}

document.querySelector(".img2").setAttribute("src", newImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} 