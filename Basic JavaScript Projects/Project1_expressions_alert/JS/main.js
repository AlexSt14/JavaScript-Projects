window.alert("Hello, World!");              //Creating a window alert with an ok button and the text
document.write('Hello, World!');            //Writes text on the HTML page 
var x = " This is a string. ";              //Defining variable x with the text
document.write(x);                          //Displays the variable on the HTML page
var A = "This is a string value into a window Alert";       //Defines variable A with the text
window.alert(A);            //This creates a window alert and displays the variable A
document.write("<br>Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>"      //This writes text on document
+ "\"Eat my shorts!\" Bart responded");                                           //And concatenates with this
var B = "<br> This is a concatenated string" + " assigned to a variable! <br>";     //Defines variable B and concatenates text
document.write(B);           //Shows the variable on the HTML page
var Dad = "Carol Sthali", Son = "Daniel Alex Sthali", Son_wife = "  Raluca Denisa",         //Defines more variables at the same time
    Son_brother = "Eraldo";         
var Son = Son.fontcolor("blue"), Dad = Dad.fontcolor("red"), Son_wife = Son_wife.fontcolor("yellow"),   //Defines font colors
    Son_brother = Son_brother.fontcolor("orange");                                          //to all the variables
document.write(Son);           //Displays the chosen variable "text" inside the HTML
var exp = ("<br><br>This is an expression assigned to a variable, that is contained in a statement");   //Defines a variable with text
document.write(exp);            //Displays the variable on the HTML page

function My_First_Function () {                                //Defining a function and naming it
    var str = "This text is green!";                           //Defining a variable and giving it a string value
    var result = str.fontcolor("green");                       //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result;    //Putting the value of results into HTML element with "Green_text" id
}

var first = "<br>This is the first variable", second = " that is concatenated with the second variable!!";  //Defining two variables
document.write(first + second);                     //Concatenate the two variables togheter