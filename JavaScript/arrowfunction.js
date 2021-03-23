//Basic simple function, will transform it in an arrow function
hello = function() {
    return "Hi there, this is my simple function";
}
document.getElementById("demo").innerHTML = hello();

//Testing the arrow function
hello2 = () => "Hi there, this is my simple Arrow function";
document.getElementById("demo2").innerHTML = hello2();

//Testing the some() Method
var array = [2, 10, 18, 20, 13, 15, 30];
var someOver20 = array.some(myFunction);

document.getElementById("test").innerHTML = "Some over 20 is " + someOver20;
function myFunction(value, index, array) {
    return value >= 30;
}

//Another type of writing the same method but with an arrow function
var ages = [2, 10, 18, 20, 13, 15, 30];

checkAge = (age) => age >= 18;

function my_Function() {
    document.getElementById("display").innerHTML = ages.some(checkAge);
}