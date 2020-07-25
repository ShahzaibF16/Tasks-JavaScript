// Chapter-9-11
// Task-1

var city = prompt("Enter your city name");
if (city === "karachi"){
    alert("Welcome to city of lights");
}

// Task-2

var gender = prompt("Enter your gender");
if (gender === "male"){
    alert("Good Morning Sir.");
}

else if (gender === "female"){
    alert("Good Morning Ma'am.");
}


// Task-3

var colorOne = prompt("Color of Signal");
if (colorOne === "red"){
    alert("Must Stop");
}
else if (colorOne === "yellow"){
    alert("Ready to move");
}
else if (colorOne === "green"){
    alert("Move now");
}


// Task-4

var carFuel = prompt("How much fuel is Remaining in Litres");
if (carFuel <= 1/4){
    alert("Please refill the fuel in your car")
}
else{
    alert("You're good on fuel")
}




// Task-5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

if("car" < "cat"){
        alert("car is smaller than cat");
        }



// Task-7

var secretNumber = 6;
var enterNum = prompt("Enter a Secret Number(1 to 10)")
if ( enterNum === secretNumber){
    alert("Bingo! Correct Answer")
}
else if (enterNum === (secretNumber + 1)){
    alert("Close enough to the correct answer")
}
else{
    alert("Wrong!")
}



// Task-8

var divisibleNum = prompt("Check your number");
if (divisibleNum % 3 == 0){
    alert("It is divisible by 3")
}
else {
    alert("It is not Divisible by 3")
}


// Task-9
var evenTask = prompt("Enter the number")
if (evenTask %2 == 0){
    alert("The number is even")
}
else {
    alert("Odd Number")
}