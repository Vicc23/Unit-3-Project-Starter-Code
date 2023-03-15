let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let screen3 = document.querySelector(".screen3");
let screen4 = document.querySelector(".screen4");
let screen5 = document.querySelector(".screen5");
let screen6 = document.querySelector(".screen6");

let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let button3 = document.querySelector(".option-three");
let button4 = document.querySelector(".option-four");
let button5 = document.querySelector(".option-five");
let button6 = document.querySelector(".option-six");


console.log("hello");
console.log("what's up");
console.log(screen1);
console.log(button1);
console.log(screen2);
console.log(button2);
// Do not worry about the code below until the end!
// Uncomment out the /* and */ at the start and end of this block to get this code working.
// Replace the part before .onclick with the names of your corresponding variables.


button1.onclick = function() {
    screen1.style.display = "block";
    screen2.style.display = "none";
};

button2.onclick = function() {
    screen2.style.display = "block";
    screen1.style.display = "none";
};


button3.onclick = function() {
    screen3.style.display = "block";
    screen4.style.display = "none";
};

button4.onclick = function() {
    screen4.style.display = "block";
    screen3.style.display = "none";
};

button5.onclick = function() {
    screen5.style.display = "block";
    screen6.style.display = "none";
};

button6.onclick = function() {
    screen6.style.display = "block";
};
