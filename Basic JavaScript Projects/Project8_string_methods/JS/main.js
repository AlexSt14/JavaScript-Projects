function full_sentence() {      //Function for concat() method that concatenates several variables togheter
    var p1 = "Hello";
    var p2 = " there!";
    var p3 = " My name is";
    var p4 = " Daniel";
    var p5 = " and";
    var p6 = " I love coding!";
    var whole = p1.concat(p2, p3, p4, p5, p6);
    document.getElementById("concat").innerHTML = whole;
}

function slice() {          //Using the slice method on a string data type
    var whole = "Hello there! My name is Daniel and I love coding!";
    var slice = whole.slice(24,30);
    document.getElementById("sli").innerHTML = slice;
}

function search() {             //Using the search method to search position of a string in a string
    var whole = "Hello there! My name is Daniel and I love coding!";
    var src = whole.search("love");
    document.getElementById("search").innerHTML = src;
}

function upper() {              //Using the toUpperCase method on a string!
    var upp = document.getElementById("upp").innerHTML;
    document.getElementById("upp").innerHTML = upp.toUpperCase();
}

function numstrings() {         //Using the toString method to show a number as a string
    var A = 1247;
    document.getElementById("numstr").innerHTML = A.toString();
}

function precision_Method() {       //Using the toPrecision method to tell the exact number lenght
    var X = 1765.1859206751023;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function toFixed() {            //Using the toFixed method to tell how many decimals to show
    var C = 15642.652148520510;
    document.getElementById("fixed").innerHTML = C.toFixed(3);
}

function value_Method() {           //Using the valueOf method to return a value of a string object
    var A = "Hello there, this returned the primitive value of a String Object!";
    document.getElementById("value").innerHTML = A.valueOf();
}