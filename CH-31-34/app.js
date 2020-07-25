// Task-1

var m = new Date();
var k = m.toString()
document.write("<br>" + k)



// Task-2

var a = new Date();
var b = a.getMonth()
var c = b.toString()

document.write("<br>Current month " + b);




// Task-3

var getDay = new Date();
var doString = getDay.toString();
var toDay = doString.slice(0,3)

document.write("<br>Today is: " + toDay)



// Task-4

var weekDate = new Date();
var arr = ["Sunday","Monday","Tuesday","Wednesday","Tuesday","Friday","Saturday"];
if(weekDate.getDate() == 0){
    document.write("<br>Its fun Day " )
}
else if(weekDate.getDay() == 6){
    document.write("<br>Its fun Day ")
}

// Task-5
var nowDate = new Date();
var firstDays = nowDate.setDate(0);
var lastDays = nowDate.setDate(15);
if(nowDate = firstDays){
    document.write("<br>First Fifteen Days of the Month");
}
else if(nowDate = lastDays){
    document.write("<br>Last Fifteen Days of the Month");
}

// Task-6

var todayD = new Date();
var todaySet = new Date('January 1, 1970');
var todaySet2 = new Date('January 1, 1970');
document.write(todayD + br + todaySet + br + todaySet2 + br);


// Task-7

var dt = new Date();
var h = dt.getHours();
var m = dt.getMinutes();
if (h > 11){
    document.write("<br> Its PM " )
}
else if (h < 11){
    document.write("<br>Its PM ")
}


// Task-8

var laterDate = new Date('December 31, 2020, 22:50:16');
    document.write(laterDate + br)



// Task-9

var ramdanDate = new Date("June 18, 2005").getTime();
var toDate = new Date().getTime();
var ramdanDayRemain = toDate + ramdanDate;

alert(ramdanDayRemain.toString().slice(0,3) + " days have passed since 1st Ramadan, 2015")


// Taskk-10

var oldDate = new Date("December 5, 2015");
var oldDateTime = new Date("December 5, 2015").getTime().toString();

document.write("On refrence Date " + oldDate + ", <br>" + oldDateTime.slice(0,6) + " seconds has passed since beggning of 2015");

// Task-11
var onDate = new Date();
var onagoDate = new Date();
var agoHour = onagoDate
document.write("Current Date : " + onDate + br + "1 hour ago, it was " + agoHour + br + hr);


// Task-12


// Task-13
var userAge = new Date (prompt("Enter your Date of Birth", "April 29, 2003"));
var userAgeTime = userAge.getTime();
var currDate = new Date(); 
var currHours = currDate.getTime();
var diff = userAgeTime - currHours;
var ageDiff = diff/(1000*60*60*24*30*12);
var ageFloor = Math.floor(ageDiff);
document.write("Your are age is " + (++ageFloor) + br + "Your birth year is " + userAge.toString().substring(10,15) + br + hr);

// Task-14

var customerName;
var currentMonth;
var numOfUnit;
var charPerUnit;
var netAmount;
var letPayment;
var grossAmount;
customerName = "ABC Customer";
currentMonth =  monthName[currMonth.getMonth()];
numOfUnit = 410;
charPerUnit = 16;
netAmount = numOfUnit * charPerUnit;
letPayment = 350;
grossAmount = netAmount + letPayment;
document.write(
    "<h1> K-Electric Bill </h1>"+br+"Customer Name : "+customerName+br+"Month : "+currentMonth+
    br+"Number of units : "+numOfUnit+br+"Charge per unit : "+charPerUnit+br+
    br+"Net Amount Payable (within Due Date) : "+netAmount+br+"Late payment surcharge : "+letPayment+
    br+"Gross Amount Payable (after Due Date) : "+grossAmount+br+hr
    );