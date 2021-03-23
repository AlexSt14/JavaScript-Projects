//Testing and using the data- attribute in conjunction with JavaScript to increase interactivity 
//I have used a paragraph element to return the info but could have used alert or other elements
function display_Info(info) {
    var cardInfo = info.getAttribute("data-card-info");
    var cardRelease = info.getAttribute("data-card-release");
    document.getElementById("returnInfo").innerHTML = info.innerHTML + ": " + cardInfo + " and it was released in " + cardRelease;
//  alert(info.innerHTML + ": " + cardInfo + " and it was released in " + cardRelease);   --> This would have given the result in an alert window
}