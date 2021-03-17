function Call_Loop() {       //Defining a function to count to ten
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Testing the length property
function string_Length() {
    var A = document.getElementById("Length").innerHTML;
    document.getElementById("result").innerHTML = A.length;
}

//For loop in action, used for when it is known how many instances does the loop need
function for_Loop() {
    var Instruments = ["Harp", "Harmonica", "Piano", "Guitar", "Violin"]
    var B = "";
    var C;
    for (C=0; C < Instruments.length; C++) {
        B += Instruments[C] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = B;
}

//Creating an array in a function
function array_Function() {
    var phones = [];
    phones[0] = "Samsung S21 Ultra";
    phones[1] = "Iphone 12 Pro Max";
    phones[2] = "Huawei P40 Pro";
    phones[3] = "Xiaomi Mi 11";
    phones[4] = "Sony Xperia 1 II";
    document.getElementById("Array").innerHTML = "My cousin has bought a " + phones[3] + " even if he likes " + phones[0] + " more.";
}

//Constant in a function!
function constant_Function() {
    const Vehicle = {type:"saloon ", brand:"Audi ", model:"a6 ", color:"black ", year:"2013 "};
    Vehicle.color = "blue";
    Vehicle.price = "$15000";
    Vehicle.model = "a4";
    document.getElementById("Constant").innerHTML = "The cost of the " + Vehicle.type + Vehicle.brand + Vehicle.model + " was " + Vehicle.price + " and the year of fabrication was " + Vehicle.year;
    Vehicle.hp = "180 hp";
    document.getElementById("Constant2").innerHTML = "And this car has about " +Vehicle.hp;
}

//Using the let keyword as a block scope (as a test)
function addTwo() {
    var x = 5;
    {
        let x = 15;
    }
    document.getElementById("blockscope").innerHTML = x * 2; //Clearly the let keyword cannot be reached from outside of the block code
}

//Using the return statement
var A = return_Function(23, 67);
function return_Function(B, C) {
    return B * C;
}
document.getElementById("return").innerHTML = A;


//Creating an object using the let keyword
let graph_card = {
    Manufacturer: "Nvidia ",
    Model: "RTX 3080 ",
    Release_year: "2020 ",
    desc : function() {
        return "He is using a " + this.Model + "manufactured by "+ this.Manufacturer + "in " + this.Release_year;
        }
};
document.getElementById("graph").innerHTML = graph_card.desc ();

//Using the break statement
function break_Function() {
    var phones = ["Samsung S21 Ultra", "Iphone 12 Pro Max", "Xiaomi Mi 11", "Huawei P40 Pro"]
    var a = "";
    var b;
    for (b = 0; b < phones.length; b++) {
        if (b === 3) {break; }
        a += phones[b] + "<br>";
    }
    document.getElementById("br").innerHTML = a;
}
//Using the continue statement
function continue_Function() {
    var phones = ["Samsung S21 Ultra", "Iphone 12 Pro Max", "Xiaomi Mi 11", "Huawei P40 Pro"]
    var a = "";
    var b;
    for (b = 0; b < phones.length; b++) {
        if (b === 2) {continue; }
        a += phones[b] + "<br>";
    } 
    document.getElementById("cont").innerHTML = a;
}