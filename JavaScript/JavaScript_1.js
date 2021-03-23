//Using the Switch statement
function Drink_Function() {
    var Drink_Output;
    var Drinks = document.getElementById("Drink_Input").value;
    var Drink_String1 = " is a great drink";
    var Drink_String2 = ", this drink does not get you fat";
    switch(Drinks) {
        case "Coca-Cola Zero":
            Drink_Output = "Coca-Cola Zero " + Drink_String2;
        break;
        case "Pepsi Max":
            Drink_Output = "Pepsi Max " + Drink_String2;
        break;
        case "Coca Cola Original":
            Drink_Output = "Coca Cola Original " + Drink_String1;
        break;
        case "Red Bull":
            Drink_Output = "Red Bull " + Drink_String1;
        break;
        case "Fanta Orange":
            Drink_Output = "Fanta Orange " + Drink_String1;
        break;
        default:
            Drink_Output = "Please enter a drink exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Drink_Output;
}

//Using the GetElementByClassName Method
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//Using JavaScript to fill in the canvas element
function my_canvas_Function() {
    //Writing stroke text
    var c = document.getElementById("Fcanvas");
    var ctx = c.getContext("2d");
    ctx.font = "25px Arial";
    ctx.strokeText("Hello World", 72,30);

    //using the linear gradient method
    var c = document.getElementById("Fcanvas");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0,0,170,0);
    grd.addColorStop(0,"white");
    grd.addColorStop(1,"black");
    ctx.fillStyle = grd;
    ctx.fillRect(20,50,250,100);
}
