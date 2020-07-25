// Task-1

var numInteger = prompt("Enter a number");
var roundNumOf;
var ceilNumOf;
var floorNumOf;


roundNumOf = Math.round(numInteger);
ceilNumOf = Math.ceil(numInteger);
floorNumOf = Math.floor(numInteger);

document.write("<br>number: " + numInteger +
    "<br>round off value: " + roundNumOf +
    "<br>floor value: " + floorNumOf +
    "<br>ceil value: " + ceilNumOf
);



// Task-2
 

var numInteger2 = prompt("Enter a negative number");
var roundNumOf2;
var ceilNumOf2;
var floorNumOf2;

roundNumOf2 = Math.round(numInteger2);
ceilNumOf2 = Math.ceil(numInteger2);
floorNumOf2 = Math.floor(numInteger2);

document.write("<br><br>number: " + numInteger2 +
    "<br>round off value: " + roundNumOf2 +
    "<br>floor value: " + floorNumOf2 +
    "<br>ceil value: " + ceilNumOf2);



// Task-3

var numAbsolute = prompt("Enter your number");
var numAbsOf = Math.abs(numAbsolute);

document.write("<br><br>The absolute value of " + numAbsolute + " is " + numAbsOf);



// Task-4

var largeNumber = Math.random();
var ourNumber = (largeNumber * 6) + 1;
var resultNumber = Math.floor(ourNumber);

document.write("<br><br> random dice value: " + resultNumber);


// Task-5
var taskFive = Math.random();
var taskFivenNum = (taskFive * 2) + 1;
var diceFlip = Math.floor(taskFivenNum); 

if(diceFlip === 2){
    document.write("<br random coin value: Heads")
}
else{
    document.write("<br> random coin value: Tails")
}


// Task-6

var taskSix = Math.random();
var taskSixNum = (taskSix * 100) + 1;
var valueNum = Math.floor(taskSixNum);

document.write("<br><br>random number between 1 and 100: " + valueNum);



// Task-7

var integerInput = prompt("Enter your Weight");
// var convertNum = Number(integerInput);
var convertNum = integerInput.match(/\d/g);
convertNum = convertNum.join("");

document.write("<br><br>The weight of user is " + convertNum + " kilograms");



// Task-8
var secretNum = prompt("Guess the secret Number 1-10");

var taskEight = Math.random();
var eightNum = (taskEight * 10) + 1;
var valueBetween = Math.floor(eightNum);
if(secretNum === valueBetween){
     alert("Congradulations! Right guess" )
 }
else{
    alert("Try again! " + " Secret number was " + valueBetween )
 }

