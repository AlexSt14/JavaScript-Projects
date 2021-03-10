var count = 0;                               //Defining a variable as a counter
function My_Second_Function () {            //Defining a function and its name
    if (count === 0) {                      //If Counter is equal to 0 then execute the following code
        var A = "Don't like the color? Click again to change it!";      //Defining a variable with text
        var B = A.fontcolor("red");          //Using the fontcolor method on A variable
        document.getElementById("Button").innerHTML = B;    //Putting the value B into the HTML element "Button"
        count = 1;                           //Setting the counter to 1
    }
    else {                                  //If counter is not equal to 0 then it will execute the following code
        var C = "What about this color?";        //Defining the variable C with text
        var D = C.fontcolor("green");       //using the fontcolor method on A variable
        document.getElementById("Button").innerHTML = D;        //Putting the value C into the HTML element "Button"
        count = 0;                           //Setting the counter back to 0
    }
}

function myFunction() {         //Defining a function and name it
    var sentence = "This is the first variable,";         //Defining a variable with text
    sentence += " this is the second variable concatenated with the first";        //Concatenating another variable with the first one
    document.getElementById("Concatenate").innerHTML = sentence;            //Putting the value sentence inside the HTML "Concatenate"
}

function phover() {             //Defining a function and name it
    var hover = "Creating functions is pretty cool";        //Defining a variable with text
    document.getElementById("hover").innerHTML = hover;     //Putting the value of variable "hover" into the HTML "hover" element
}

