//This will help validate a form to see if email input is empty
function validateForm() {
    var x = document.forms["myForm"]["input"].value;
    if (x == "") {
        alert("Email address must be filled out");
        return false
    }
}