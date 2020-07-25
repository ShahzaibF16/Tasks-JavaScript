// Ch 6-11
// Task-1

var a = 10;
document.write(
    "Result: <br>" + 
    "<br> The value of a is: " + a +
    "<br>..................................." + 
    "<br> The value of ++a is: " + (++a) +
    "<br> Now the value of a is: " + a +
    "<br><br> The value of a++ is: " + (a++) +
    "<br> Now the value of a is: " + a +
    "<br><br> The value of --a is: " + (--a) +
    "<br> Now the value of a is: " + a +
    "<br><br> The value of a-- is : " + (a--) + 
    "<br> Now the value of a is: " + a

);

// Task-2

var  b = 2, c = 1;

document.write(
    "<br><br> b is " + b +
    "<br> c is " + c +
    "<br> --b is " + (--b) +
    "<br> --b - --c is " + ((--b) - (--c)) +
    "<br> --b - --c + ++c is " + ((--b) - (--c) + (++c)) +
    "<br> The Result (--b - --c + ++c +c--) is " + ((--b) - (--c) + (++c) + (c--))
    
);

// Task-3

// var name = prompt("Enter your name: ");
// alert ("Nice to see you Mr. " + name);

// Task-4,5

// var number =  prompt("Enter a number");

// for (var i = 1; i <= 10; i++){
        
//     document.write(
//             "<br><br>" + number + "x" + i + "=" + number*i )
//     }


// Task-6

var subjectOne = prompt("Selcect your Subject 1");
var subjectTwo = prompt("Selcect your Subject 2");
var subjectThree = prompt("Selcect your Subject 3");

var totalMarks = 100;

var subjectOneMarks = prompt("Marks Subject 1");
var subjectTwoMarks = prompt("Marks Subject 2");
var subjectThreeMarks = prompt("Marks Subject 3");

var totalMarksSubject = totalMarks * 3;

var totalObtainedMarks = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;

var percentSubjectOne = subjectOneMarks / totalMarks * 100;
var percentSubjectTwo = subjectTwoMarks / totalMarks * 100;
var percentSubjectThree = subjectThreeMarks / totalMarks * 100;

document.write(
   "Subject  Total Marks  Obtained marks  Percentage"
);







