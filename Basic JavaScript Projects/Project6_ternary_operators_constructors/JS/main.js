function Ride_Function() {          //Defines a function and its name
    var Height, Can_ride;       //Defines two variables with no value
    Height = document.getElementById("Height").value;       //Defines a value of a variable that is taken from HTML "Height" element
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";    //Defines a value of a variable using ternary operators
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";     //Displays the value of variable Can_ride into the "Ride" HTML element
}

function vote_Function() {          //Defines a function and its name
    var Age, Can_vote;              //Defines two variables with no values
    Age = document.getElementById("age").value;     //Defines the value of the variable equal to the value the user input
    Can_vote = (Age < 18) ? "You are not old enough to vote!":"You can vote!!";     //Defines a value of variable usint Ternary Operators
    document.getElementById("vote").innerHTML = Can_vote;       //Displays the vlue of variable Can_vote into the "vote" HTML element
}

function Vehicle(Make, Model, Year, Color) {        //Defining a function as a constructor for object Vehicle
    this.Vehicle_Make = Make;                       //Defining properties of the object
    this.Vehicle_Model = Model;                     //Defining properties of the object
    this.Vehicle_Year = Year;                       //Defining properties of the object
    this.Vehicle_Color = Color;                     //Defining properties of the object
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");      //Creating a new Vehicle Object with properties
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");     //Creating a new Vehicle Object with properties
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");          //Creating a new Vehicle Object with properties
function myFunction() {             //Defining a function and its name
    document.getElementById("Keywords_and_Constructors").innerHTML =        //Changing the HTML id element with the value below
    "Erick Drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model + " manufactured in " + Erick.Vehicle_Year;
}

var Alex1 = new Vehicle("Ford", "Focus", 2008, "Gray");      //Creating a new Vehicle Object with properties
function alexvehicle() {                //Defining a function and its name
    document.getElementById("New_and_This").innerHTML =         //Changing the HTML id elementi with the value below
    "Alex drives a " + Alex1.Vehicle_Color + "-colored " + Alex1.Vehicle_Model + " manufactured in " + Alex1.Vehicle_Year;
}

function Customer(Name, Surname, DOB, Reg_Date, Active) {       //Defining a function as a constructor for Customer Object
    this.Customer_Name = Name;                  //Defining properties of the object
    this.Customer_Surname = Surname;            //Defining properties of the object
    this.Customer_DOB = DOB;                //Defining properties of the object
    this.Customer_Reg_Date = Reg_Date;      //Defining properties of the object
    this.Customer_Active = Active;          //Defining properties of the object
}


var Alex = new Customer("Alex", "Sthali", "01/05/1994", "25/03/2021", "true");       //Creating a new Customer Object with properties

function AlexAge() {            //Defining a function and its name
    var a = document.getElementById("input").value;         //Defining a variable that takes input
    var reply;      //Defining an emtpy variable
    if (a == "Age") {       //If variable a is equal to text "Age" then execute code
        reply = "Alex's date of birth is " + Alex.Customer_DOB;     //Changes the variable value
    }
    else {          //Else if the above statement is false, execute the following code
        reply = "Please make sure to type in \"Age\"";      //Changes the variable value
    }
    document.getElementById("test").innerHTML = reply;      //Changes the HTML "test" element with value from variable "reply"
}

function count_Function () {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 0;
        function Plus_one() {Starting_point += 1;}
        Plus_one()
        return Starting_point;
    }
}