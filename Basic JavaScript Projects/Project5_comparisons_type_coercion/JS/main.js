document.write(typeof "Something");         //Shows the type of data if string or numeral
document.write("<br>");             //Defines a break line in HTML
document.write(typeof 2);           // Shows the type of data if string or numeral

function my_Function() {        //Defines a function and its name
    document.getElementById("Test").innerHTML = 0/0;        //Testing the Not a Number, NaN 
}

function my_Function2() {       //Defines a function and its name
    document.getElementById("Test2").innerHTML = isNaN("Text");      //Testing how to use isNaN / is Not a Number
}

function my_Function3() {       //Defines a function and its name
    document.getElementById("Test3").innerHTML = isNaN("0467");     //Testing how to use the isNaN / is Not a Number
}

document.write("<br>");         //Defines a break line in HTML
document.write(1.5E510);        //Testing the infinite number using floating point

document.write("<br>");        //Defines a break line in HTML
document.write(-4E311);         //Testing the -infinite number using floating point

document.write("<br>");         //Defines a break line in HTML
document.write(10>2);           //Using Logical Operators to show if True or False

document.write("<br>");         //Defines a break line in HTML
document.write(10<2);           //Using Logical Operators to show if True or False
console.log(15 + 3);            //Doing math operations in console log in developer tools

document.write("<br>");         //Defines a break line in HTML
document.write("125" + 5);      //Testing how type coercion works

console.log(10<2);              //Using Logical Operators inside the console in developer tools

document.write("<br>");         //Defines a break line in HTML
document.write(10==10);         //Using Logical Operators to show if two values are the same 

document.write("<br>");         //Defines a break line in HTML
document.write((10 * 3)==3);        //Using Logical Operators to show if two values are the same

document.write("<br>");         //Defines a break line in HTML
var x = 1920;                   //Defines a variable with its value
var y = 1920;                   //Defines a variable with its value
document.write(x === y);        //Using Logical Operators to show if two values AND data type are the SAME!!

var a = 1920;                   //Defines a variable and its value
var b = "onethousandtwentytwo"; //Defines a variable and its value
document.write("<br>");         //Defines a break line in HTML
document.write(a === b);        //Using Logical Operators to show if two values AND data types are the SAME!!

var c = 1200;                   //Defines a variable with its value
var d = "onethousandtwohundred";    //Defines a variable with its value
document.write("<br>");         //Defines a break line in HTML
document.write(c === d);        //Using Logical Operators to show if two values AND data types are the SAME!!

var e = 15;                     //Defines a variable and its value
var f = 16;                     //Defines a variable and its value
document.write("<br>");         //Defines a break line in HTML
document.write(e === f);        //Using Logical Operators to show if two values AND data types are the SAME!!

document.write("<br>");         //Defines a break line in HTML
document.write(5 < 10 && 10 > 9);   //Using Boolean logic to show if True or False

document.write("<br>");         //Defines a break line in HTML
document.write(5 > 3 && 10 < 8);    //Using Boolean logic to show if True or False

document.write("<br>");         //Defines a break line in HTML
document.write(10 < 2 || 55 > 52);  //Using Boolean logic to show if True or False

document.write("<br>");         //Defines a break line in HTML
document.write(10 < 7 || 5 > 55);   //Using Boolean logic to show if True or False

function not_Function() {       //Defines a function and its name
    document.getElementById("Not").innerHTML = ! (5 > 10);      //Changes the HTML "Not" element with value of the Boolean logic
}

function not_Function2() {      //Defines a function and its name
    document.getElementById("Not2").innerHTML = ! (10 < 21);    //Changes the HTML "Not2" element with value of the Boolean logic
}