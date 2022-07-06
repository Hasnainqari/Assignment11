// Chapter No 30 to 35;
// Question No 01;
// var questionOneDate = new Date();
// alert(questionOneDate);

// Question No 02;
// var monthArray = ["January","February","March","Aprail","May","June","July","August","September","October","November","December"]; 
// var questionTwoDate  = new Date();
// var theMonth = questionTwoDate.getMonth();
// var nowMonth = monthArray[theMonth];
// alert("Current Month: " + nowMonth);

// Question No 03;
// var dayArray = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]; 
// var questionThreeDate  = new Date();
// var theday = questionThreeDate.getDay();
// var nowDay = dayArray[theday];
// alert("Today is " + nowDay);

// Question No 04;
// var daysArray1 = ["Mon","Tue","Wed","Thur","Fri"];
// var daysArray2 = ["Sat","Sun"];
// var questionFourDate = new Date();
// var currentDay = questionFourDate.getDay();
// if(daysArray2 === currentDay){
//     var message = ("It's a FunDay");
//     alert(message);
// }else{
//     alert("It's a Working Day")
// }

// Question No 05;
// var questionFiveDate = new Date();
// var firstDays = questionFiveDate.getDate();
// if(firstDays >= 1 && firstDays <= 15){
//     document.write("First Fifteen Days Of This Month");
// }
// else if (firstDays < 15 && firstDays <= 31){
//     document.write("Last Day Of This Month");
// }

// Question No 06;
// var questionSixDate = new Date();
// var diff1 = new Date().getTime();
// var diff2 = new Date("December 1 1970").getTime();
// var result = diff1-diff2;
// var sec = Math.ceil(result/(1000*60));
// var mnt = Math.ceil(result/(1000*60*60));
// console.log(questionSixDate);
// console.log("Milliseconds "+ sec);
// console.log("Minutes "+ mnt);

// Question No 07;
// var questionSevenDate = new Date();
// var noon = questionSevenDate.getHours();
// if(noon <= 12){
//     document.write("It's AM");
// }else{
//     document.write("It's PM");
// }

// Question No 08;
// var questionEightDate = new Date();
// questionEightDate.setDate("July 5 2020");
// document.write(questionEightDate.getDate());

// Question No 13;
// var userAge = prompt("Enter Your Age")
// var questionNineDate = new Date(userAge).getTime();
// var questionNineDate1 = new Date().getTime();
// var div = questionNineDate1-questionNineDate;
// var userYear = Math.floor(div/(1000*60*60*24*365));
// document.write("Your Age is:" + userYear + "<br>");
// document.write("Your Birth Year is:" + userAge);

// Question No 14;
// var monthName =  ["January","February","March","Aprail","May","June","July","August","September","October","November","December"]; 
// var userInputName = prompt("Enter Your Name");
// var billmonths = new Date().getMonth();
// var billUnits = +prompt("Enter Your Bill units");
// var unitCharges = +prompt("Enter Your charges per unit");
// var chargeslateBill = +prompt("Enter Late Payment Charges");
// var billDueDate = +prompt("Enter Net Amount Payble(with in Due Date)");
// var multiply = billUnits*unitCharges;
// var multiplying = multiply+chargeslateBill;
// document.write("<h1>" + "K-Electric Bill" + "</h1>");
// document.write("<b>" + "Customer Name: " + "</b>" + userInputName + "<br>");
// document.write("<b>" + "Month: " + "</b>" + billmonths  + "<br>");
// document.write("<b>" + "Number Of Units: " + "</b>" + billUnits  + "<br>");
// document.write("<b>" + "Charges Per Unit: " + "</b>" + unitCharges  + "<br>");
// document.write("<b>" + "Net Amount Payble(with in Due Date): " + "</b>" + multiply  + "<br>");
// document.write("<b>" + " Late Payment Charges: " + "</b>" + chargeslateBill  + "<br>");
// document.write("<b>" + "Gross Amount Payable After a (Due Date): " + "</b>" + multiplying  + "<br>");


