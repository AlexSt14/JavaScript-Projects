var a = 25;             //Defining a global variable
function add() {        //Defining a function and its name  
    document.getElementById("global").innerHTML = a + 10;       //Changing HTML "global" element with value of variable a + 10
}



function add3() {       //Defining a function and its name
    var b = 20;          //Definin a local variable after I tried to use a local variable from function above, debugged it from console.log
    document.getElementById("local").innerHTML = b + 55;        //Changing HTML "local" element with value of variable b + 55
}

function date() {           //Defining a function and its name
    var a = new Date().getHours();      //Defining a variable that takes the time
    if (a < 18) {           //If the time on variable a is lesser than 18 then execute this code
        document.getElementById("Greetings").innerHTML = "Good day sir, the time is " + a;      //Changes the HTML "Greetings" element with text and variable a
    }
    else if (a < 23) {      //Else If the time on variable a is lesser than 23 then execute this code
    document.getElementById("Greetings").innerHTML = "Good evening sir, the time is " + a;      //Changes the HTML "Greetings" element with text and variable a
    }
    else if (a < 6) {       //Else If the time on variable a is lesser than 6 then execute this code
        document.getElementById("Greetings").innerHTML = "It is night time sir, you should sleep if you are working tomorrow, the time is " + a;    //Changes the HTML "Greetings" element with text and variable a
    }
}


var counter = 0;        //Defining a variable as a counter
function main_Function() {      //Defining a function and its name  
        if (counter == 0) {     //If Counter is equal to 0 then execute the following code
            document.getElementById("color").className = "color";   //Changes the HTML "color" element and assigns the default class name
            var a = "Do you like this color?";      //Defining a variable with text
            var b = a.fontcolor("red");     //Defining a variable that changes color to variable a
            document.getElementById("color").innerHTML = b;     //Changes the HTML "color" element with value on variable b
            counter = 1;
        } 
        else if (counter == 1) {    //If Counter is equal to 1 then execute the following code
            var a = "What about this other color?";     //Defining a variable with text
            var b = a.fontcolor("orange");          //Defining a variable that changes color to variable a
            document.getElementById("color").innerHTML = b;     //Changes the HTML "color" element with value on variable b
            counter = 2;
        }
        else if (counter == 2) {    //If Counter is equal to 2 then execute the following code
            var a = "Is this other color alright? (I hope so)";     //Defining a variable with text
            var b = a.fontcolor("green");       //Defining a variable that changes color to variable a
            document.getElementById("color").innerHTML = b;     //Changes the HTML "color" element with value on variable b
            counter = 3;
        }
        else if (counter = 3) {     //If Counter is equal to 3 then execute the following code
            var a = "What about the background color?"      //Defining a variable with text
            var b = a.fontcolor("yellow")       //Defining a variable that changes color to variable a
            document.getElementById("color").className = "button_color";
            document.getElementById("color").innerHTML = b;     //Changes the HTML "color" element with value on variable b
            counter = 0;
        }
}

function type_Function() {      //Defining a function and its name
    var a = document.getElementById("input").value;     //Defining a variable that takes input from HTML element"input"
    if (a == "red") {       // If variable a is equal to text "red" then execute this code
        var reply = "You typed correctly";      //Defining a variable with text
    }
    else {          //Else if the "If" statement is false, then execute the following code
        var reply = "Please make sure to type \"red\"";     //Defining a variable with text
    }
    document.getElementById("reply").innerHTML = reply;     //Changes the HTML "reply" element with value from variable "reply"

}

function Time_function() {          //Defining a function and its name
    var Time = new Date().getHours();       //Defining a variable and giving it the value of hour time
    var Reply;      //Defining a variable with no value
    if (Time < 12 == Time > 0) {        //If this is true, then execute the following code
        Reply = "It is morning time!";      //Assigns a value to an existing variable
    }
    else if (Time > 12 == Time < 18) {      //Else If this is true then execute the following code
        Reply = "It is the afternoon.";     //Assigns a value to an existing variable
    }
    else {                  //Else if above statements are false, execute this code
        Reply = "It is evening time.";      //Assigns a value to an existing variable
    }
    document.getElementById("Time_of_day").innerHTML = Reply;       //Changes the HTML "Time_of_day" element with value from variable "reply"
}