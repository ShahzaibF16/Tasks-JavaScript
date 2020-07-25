
// Task-1
var mainContent = document.getElementById("main-content");
console.log(mainContent.childNodes);


// Task-2
var renderElements = document.getElementsByClassName("render");
renderElements = renderElements.innerHTML;


// Task-3
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var emailValue = document.getElementById("email");
firstName.value = "Muhammad Shahzaib";
lastName.value = "Khalid";
emailValue.value = "shahzaib1638@gmail.com";


// Task-4
var checkNodeType = document.getElementById("form-content");
document.write(checkNodeType.nodeType + "<br>");


// Task-5
document.write(lastName.nodeType + "  &  " + lastName.childNodes);


// Task-6
document.write(
  "<br />" + mainContent.firstChild + "  &  " + mainContent.lastChild + "<br />"
);


// Task-7
document.write(
  lastName.nextSibling + "  &  " + lastName.previousSibling + "<br />"
);


// Task-8
document.write(emailValue.parentNode + "  &  " + emailValue.nodeType);
