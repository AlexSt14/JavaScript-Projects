function math_Function() {          //Defining a function and its name
    var add = 2 + 2;                //Defining a variable as a math operation
    document.getElementById("Math").innerHTML = "2 + 2 = " + add;       //Changing the html element "Math" with the value of add variable
}

function math_Function2() {         //Defining a function and its name
    var Sub = 10 - 6;               //Defining a variable as a math operation
    document.getElementById("Math2").innerHTML = "10 - 6 = " + Sub;     //Changing the html element "Math" with the value of Sub variable
}

function math_Function3() {         //Defining a function and its name
    var mult = 12 * 5;              //Defining a variable as a math operation
    document.getElementById("Math3").innerHTML = "12 * 5 = " + mult;        //Changing the html element "Math" with the value of mult variable
}

function math_Function4 () {        //Defining a function and its name
    var div = 60 / 5;               //Defining a variable as a math operation
    var reply = "! Of course its 12! you just multiplied 12 * 5 and gave you 60!"       //Defining a variable that will concatenate with the first one
    document.getElementById("Math4").innerHTML = "60 / 5 = " + div + reply;     //Changing the html element "Math" with the value of div variable concatenated with the second variable
}

function math_Function5() {         //Defining a function and its name
    var multiple = 5 + 10 * (3 - 20) / 2;   //Defining a variable as a math operation
    document.getElementById("Math5").innerHTML = " 5 + 10 * (3 - 20) / 2 = " + multiple;        //Changing the html element "Math" with the value of multiple variable
}

function math_Function6() {         //Defining a function and its name
    var remainder = 100 % 11;            //Defining a variable as a math operation
    document.getElementById("Math6").innerHTML = "100 / 11 has a remainer of: " + remainder;     //Changing the html element "Math" with the value of remainder variable
}

function math_Function7() {         //Defining a function and its name
    var operator = -10;             //Defining a variable as a math operation
    document.getElementById("Math7").innerHTML = -operator;         //Changing the html element "Math" with the value of operator variable
}

var count = 0           //Defining a variable with a value
function changecolor() {        //Defining a function and its name
    if (count == 0) {           //If variable count is equal to 0 then the next code should be executed
        var A = "Do you like this color?";      //Defining a variable and its text
        var AA = A.fontcolor("red");            //Defining a variable with changing font color propertie
        document.getElementById("button").innerHTML = AA;       //Changing the HTML content from "button" ID with variable AA
        count++;            //Increment variable count by 1
    }
    else {                  //If variable count is not equal to 0 then the following code will be executed
        var C = "What about this color?";       //Defining a variable and its text
        var CC = C.fontcolor("Green");          //Defining a variable with changing font color propertie
        document.getElementById("button").innerHTML = CC;       //Changing the HTML content from "button" ID with variable CC
        count--;            //Decrement variable count by 1
    }
}

function math_Function8() {         //Defining a function and its name
    var guess = Math.random() * 10;     //Defining a variable and a Math method
    document.getElementById("Math8").innerHTML = Math.round(guess) + "! I bet you haven't thought of that number, right? ";     //Changing the HTML element "Math8" with variable guess using a Math method
}