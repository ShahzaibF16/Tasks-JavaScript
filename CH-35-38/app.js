// Task-1
function date(){
  var date = new Date();
  document.write(br+hr+date + br + hr);
}
date();

// Task-2

var firstName = prompt("Enter first name");
var lastName = prompt("Enter Last name")

function showMessage() {
  let message = 'Hello, ' + firstName + " " + lastName;
  alert(message);
}
showMessage();


// Task-3

   
var a = +prompt("Enter first number");
var b = +prompt("Enter second number");

var x = myFunction(a, b);
function myFunction(a, b) {
  return (a + b);             
}

document.write("<br> Addition of a+b is: " + x);


// Task-4

function calc(num1, opr, num2){
  if (opr === "+"){
      return num1+num2;
  }
  else if (opr === "-"){
      return num1-num2;
  }
  else if (opr === "*"){
      return num1*num2;
  }
}
calc()
document.write(calc(30, "+", 20) + br );
document.write(calc(20, "-", 9) + br);
document.write(calc(6, "*", 13) + br);


// task-5

var number = +prompt("Enter number to squared")
function squareIt(number) {

    return Math.pow(number,2);
 }
document.write("<br>Square of the number is "+ squareIt(number));

// Task-6

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = prompt("Number to factorized");
  answer = factorial(n)
  document.write("<br>The factorial of " + n + " is " + answer);


// Task-7

var input = prompt("Starting number of counting");
var limitInput = prompt("Ending Number of counting");
for (input; input <= limitInput; input++) {
    document.write("<br>" + input);
   }



// Task-8

var base = +prompt("Enter Base");
var perpendicular = +prompt("Enter Perpendicular");
function pythagorean(base, perpendicular){

    return Math.sqrt(Math.pow(base, 2) + Math.pow(perpendicular, 2));
  }
  
  document.write("<br>Hypotenuse of triangle is " + pythagorean(base, perpendicular));


// Task-9

var length = +prompt("Enter the heigth of your rectangle.");
var width = +prompt ("Enter the width of your rectangle.");
var z = area(length, width);
function area (length, width) {
return (length * width);
}

document.write("<br>The area of your rectangle is " + z);




// Task-10 not working

var cstr = prompt("Enter your word");
function check_Palindrome(str_entry){
    
var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
var ccount = 0;

if(cstr==="") {
    alert("Nothing found!");
       return false;
        }
    
if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    
if (cstr.length === 1) {
                alert(cstr + " is a Palindrome.");
                return true;
            } 
else {

                ccount = (cstr.length - 1) / 2;
            }
        }
    
for (var x = 0; x < ccount; x++) {
    
if (cstr[x] != cstr.slice(-1-x)[0]) {
    alert(cstr + " is not a palindrome.");
                return false;
            }
        }
 alert(cstr + " is a palindrome.");
        return true;
    }



// task-11

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write("<br>Result: " + uppercase("the quick brown fox"));


// Task-12
function find_longest_word(v)
{
  var arr = v.match(/\w[a-z]{0,}/gi);
  var res = arr[0];

  for(var x = 1 ; x < arr.length ; x++)
  {
    if(res.length < arr[x].length)
    {
    res = arr[x];
    } 
  }
  return res;
}
document.write("<br>Output: " + find_longest_word('Web Development Tutorial'));



// Task-13

function char_count(word, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < word.length; position++) 
 {
    if (word.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('saylaaniwelfare.com', 'a'));


// Task-14

function calcCircumfrence(radius) {
var y = (Math.PI * radius) * 2;
  console.log("The circumfrence is " + y + ".");
  }
function calcArea(radius) {
    var x = (Math.PI * radius) * radius;
console.log("The Area is " + x + ".");
  }
  
calcCircumfrence(30);
calcArea(10);