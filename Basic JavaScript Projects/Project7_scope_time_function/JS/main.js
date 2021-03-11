var a = 25;             //Defining a global variable
function add() {        //Defining a function and its name  
    document.getElementById("global").innerHTML = a + 10;       //Changing HTML "global" element with value of variable a + 10
}



function add3() {       //Defining a function and its name
    var b = 20;          //Definin a local variable after I tried to use a local variable from function above, debugged it from console.log
    document.getElementById("local").innerHTML = b + 55;        //Changing HTML "local" element with value of variable b + 55
}

function date() {
    var a = new Date().getHours();
    if (a < 18) {
        document.getElementById("Greetings").innerHTML = "Good day sir, the time is " + a;
    }
    else if (a < 23) {
    document.getElementById("Greetings").innerHTML = "Good evening sir, the time is " + a;
    }
    else if (a < 6) {
        document.getElementById("Greetings").innerHTML = "It is night time sir, you should sleep if you are working tomorrow, the time is " + a;
    }
}


var counter = 0;
function main_Function() {
        if (counter == 0) {
            document.getElementById("color").className = "color";
            var a = "Do you like this color?";
            var b = a.fontcolor("red");
            document.getElementById("color").innerHTML = b;
            counter = 1;
        } 
        else if (counter == 1) {
            var a = "What about this other color?";
            var b = a.fontcolor("orange");
            document.getElementById("color").innerHTML = b;
            counter = 2;
        }
        else if (counter == 2) {
            var a = "Is this other color alright? (I hope so)";
            var b = a.fontcolor("green");
            document.getElementById("color").innerHTML = b;
            counter = 3;
        }
        else if (counter = 3) {
            var a = "What about the background color?"
            var b = a.fontcolor("yellow")
            document.getElementById("color").className = "button_color";
            document.getElementById("color").innerHTML = b;
            counter = 0;
        }
}

function type_Function() {
    var a = document.getElementById("input").value;
    if (a == "red") {
        reply = "You typed correctly";
    }
    else {
        reply = "Please make sure to type \"red\"";
    }
    document.getElementById("reply").innerHTML = reply;

}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}