// CH-38-42

// Task-1

// function powIt(num1, num2) {
//     return Math.pow(num1, num2);
// }
// document.write("4 exponents to 2 = " + powIt(4,2));






// Task-2

// var year = prompt("Year")
// function leapyear(year){
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// alert(leapyear(year));






// Task-3

// var a = +prompt("side 1");
// var b = +prompt("side 2");
// var c = +prompt("side 3");

// function areaTriangle(a,b,c){
//     var s = ((a + b + c)/2)
//     return (s*(s-a)*(s-b)*(s-c));
// }
// console.log(areaTriangle(a,b,c))







// Task-4

// var sub1 = +prompt("Marks in Maths")
// var sub2 = +prompt("Marks in Chemistry")
// var sub3 = +prompt("Marks in Physics");
// var total = 100;
// var obtainMarks = sub1 + sub2 + sub3;
// var averageHtml;
// var percentageHtml;

// function average() {
//     averageHtml =
//       "The Average of Marks is : " +
//       (obtainMarks / obtainMarks.length) * obtainMarks.length +
//       "<br />";
// }
//   function percentage() {
//     percentageHtml =
//       "The Percentage of Marks is : " + obtainMarks + "%";
// }




// Task-5

// function indexOf(string, character){
//     return string.indexOf(character)
// }
// console.log(indexOf("woof","w"))








// Task-6

// var word = "Im the eldest sibling of my house";
// function removeVowels() {
//     var newWord = "";
//     for (var i = 0; i < word.length; i++) {

//         if (word[i] != "a" && word[i] != "e" && word[i] != "o" && word[i] != "u" && word[i] != "i")

//             return newWord += word[i];
//     };
// };
// console.log(removeVowels(word))










// Task-7

// function findVowels() {
//     var str = "Please read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;

//     for (var i = 0; i < chars.length - 1; i++) {
//         var char = chars[i];
//         var next = chars[i + 1];
//         if (isCorrectCharacter(char) && isCorrectCharacter(next)) {
//             count++
//         }
//     }
//     return count;
// }
// function isCorrectCharacter(char) {
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }
// var result = findVowels();
// console.log(result);







// Task-8

// var input = +prompt("Enter Distance");
// function intoMeter() {
//     return input / 1000;
// };
// function intoFeet() {
//     return input / 3280.84;
// };
// function intoInch() {
//     return input / 39370.1;
// };
// function intoCentimeter() {
//     return input / 100000;
// };
// console.log(intoMeter(input));
// console.log(intoFeet(input));
// console.log(intoInch(input));
// console.log(intoCentimeter(input));






// Task-9

// var count = 1, workingHour, overTime;
// var overTimePay;
// while(count <= 10){
//     workingHour = prompt("Enter the working hours");
   
//     if (workingHour > 40){
//         overTime = workingHour - 40;
//         overTimePay = overTime * 12.00;
//         alert("Overtime pay is " + overTimePay)
//     }
//     else{
//         alert("You'll have to work for atleast 40 hours")
//     }
//     count++;

// } 





// Task-10
 
// var amount;
// amount = prompt("Please input amount for withdrawa: ");
// var a = amount / 100;

// document.write("<br>Required notes of Rs.100 = " + Math.floor(a));
// var b = (amount % 100) / 50;
// document.write("<br>Required notes of Rs.50 = " + Math.floor(b));
// var c = ((amount % 100) % 50) / 10;
// document.write("<br>Required notes of Rs.10 = " + Math.floor(c));
// var d = ((amount % 100) % 50) % 10;
// document.write("<br>Amount still remaining = " + Math.floor(d));








