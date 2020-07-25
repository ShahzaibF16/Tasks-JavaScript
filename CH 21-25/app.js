// Task-1

var firstName = prompt("Enter First name");

var lastName = prompt("Enter Your second name");

var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);





// Task-2


var favoriteMobile = prompt("Enter your Favorite Phone");
var lengthOfCharacters = favoriteMobile.length;

document.write(" My Favorite phone is: " + favoriteMobile +
"<br> Length of string: " + lengthOfCharacters);





// Task-3

var counry = "Pakistani";
var numIndex = counry.indexOf('n');

document.write(
    "<br> String: " + counry +
    "<br> Index of 'n': " + numIndex
);




// Task-4

var helloText = "Hello World";
var helloTextIndex = helloText.lastIndexOf('l');

document.write(
    "<br> String: " + helloText +
    "<br> Last Index of 'l': " + helloTextIndex
);



// Task-5

var helloTextTwo = "Pakistani";
var helloTextIndexTwo = helloTextTwo.charAt('3');

document.write(
    "<br> String: " + helloTextTwo +
    "<br> Charcter at index 3: " + helloTextIndexTwo
);



// Task-6

var firstName2 = prompt("Ennter first name ");

var lastName2 = prompt("Enter last name ");

var fullName2;

fullName2 = firstName2.concat(lastName2);

alert("Hello, " + fullName2);


// Task-7

var cityName = "Hyderabad";
var replacedCity = cityName.replace("Hyder", "Islam");

document.write("<br><h4> City: " + cityName +
"<br>After replacement:  " + replacedCity + "</h4>"
);



// Task-8
var message = "Ali and Sami are best friends. They play cricket and football together."

var messageAnd = message.replace(/and/g, "&");

document.write("<br>  " + messageAnd);



// Task-9

var taskNineNum = "472";

var taskNine = taskNineNum.replace("472", 472);

document.write("<br><br> Value: " + taskNineNum +
    "<br> Type: string" +
    "<br> Value: " + taskNine +
    "<br> Type: number"
)


// Task-10

var userInput = prompt("Enter any character");

var upperCaseUser = userInput.toUpperCase();

document.write(
    "<br><br> User input: " + userInput +
    "<br> Upper case: " + upperCaseUser
);


// Task-11

var userTaskEleven = prompt("User Input");
var caseTaskeleven = userTaskEleven.charAt(0).toUpperCase() + userTaskEleven.slice(1);

document.write("<br><br> User input: " + userTaskEleven +
    "<br> Title case: " + caseTaskeleven
);




// Task-12

var num = 35.36;
var sting = num.toString();

document.write("<br> Number: " + num + 
        "<br> Result: " + sting
);




// Task-13  Incomplete

var x = prompt("Enter Username");


if(x === x.charAt(64)) {
    alert("Enter a valid username");
}
else{
    alert("Welcome")
}





// Task-14


var items = ["cake","apple pie","cookie","chips","patties"];

var search = prompt("Search your food");

if(items.indexOf(search) !== -1){
    document.write("<br>" + search + " is available in our bakery")
}
else if(items.indexOf(search) !== -2){
    document.write("<br>" + search + " is available in our bakery")
}
else if(items.indexOf(search) !== -3){
    document.write("<br>" + search + " is available in our bakery")
}
else if(items.indexOf(search) !== -4){
    document.write("<br> " + search + " are available in our bakery")
}
else if(items.indexOf(search) !== -5){
    document.write("<br> " + search + " are available")
}
else{
    document.write("<br> We are sorry, " + search + " is not available in our bakery")
}




// Task-15

var password = prompt("Enter your password");

if(password==null || password==""){
    document.write("<br>Please enter a valid password")
}
else if (password.length < 6){
    document.write("<br>Password must be at least 6 characters long.")
}
else{
    document.write("<br>Welcome! to Saylani")
}
document.write("<br>Entered password is " + password);



// Task-16

var university = "University of Karachi";
var splitUni = university.split("",21).join("</br>");

document.write("<br>"+  splitUni);


// Task-17

var taskSeventeen = prompt("Enter your Input");
var lastCharacter = taskSeventeen[taskSeventeen.length -1];
document.write("<br> User Input " + taskSeventeen +
        "<br> Last character of input is " + lastCharacter
);



// Task-18

var mystring18 = "the quick brown fox jumps over the lazy dog";
var occurrence = "the";
var r = mystring18.split(occurrence).length -1;

document.write("<br> Text: " + mystring18 +
            "<br> There are " + r + "occurrences of word " + occurrence
);