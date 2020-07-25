
// Task-1

function taskOne(){
    alert("This is an alert box")
}


// Task-2


function taskTwo(){
    alert("Thanks for puchasing a phone from us")
}


// Task-3


var zeroTd = document.getElementById("0");
var oneTd = document.getElementById("1");
var twoTd = document.getElementById("2");
var threeTd = document.getElementById("3");
var zeroTdHtml = (zeroTd.innerText = 0);
var oneTdHtml = (oneTd.innerHTML = 1);
var twoTdHtml = (twoTd.innerHTML = 2);
var threeTdHtml = (threeTd.innerHTML = 3);
var firstTd = document.getElementById("0name");
var secondTd = document.getElementById("1name");
var thirdTd = document.getElementById("2name");
var fourthTd = document.getElementById("3name");

firstTdHtml = firstTd.innerHTML = "Jhon";
secondTdHtml = secondTd.innerHTML = "Doe";
thirdTdHtml = thirdTd.innerHTML = "Mark";
fourthTdHtml = fourthTd.innerHTML = "James";

var firstButton = document.getElementById("0btn");
var secondButton = document.getElementById("1btn");
var thirdButton = document.getElementById("2btn");
var fourthButton = document.getElementById("3btn");

function deleteFirstList() {
  zeroTd.innerHTML = "";
  firstTd.innerHTML = "";
  firstButton.innerHTML = "";
}
function deleteSecondList() {
  oneTd.innerHTML = "";
  secondTd.innerHTML = "";
  secondButton.innerHTML = "";
}
function deleteThirdList() {
  twoTd.innerHTML = "";
  thirdTd.innerHTML = "";
  thirdButton.innerHTML = "";
}
function deleteFourthList() {
  threeTd.innerHTML = "";
  fourthTd.innerHTML = "";
  fourthButton.innerHTML = "";
}


// Task-4

function swapPic(){
    document.getElementById("img").src = "photo2.jpg";
}
function swapPic2(){
    document.getElementById("img").src = "photo.jpg";
}


// Task-5

var count = 0;
var counter = document.getElementById("counter");
var incrementValue = document.getElementById("increment");
var decrementValue = document.getElementById("decrement");
function countpp() {
  count++;
  counter.innerText = count;
}
function countmm() {
  count--;
  counter.innerText = count;
}