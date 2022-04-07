var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

var hourCheck = moment().format("[hour-]H");
console.log(hourCheck);

hourID = document.getElementById("#hour-[]");
function checkHour(){
    for (var i = 0; i < hourID; i++){
        console.log(hourID)
}
}


var textBox = document.querySelectorAll(".textarea"); 
var container = document.querySelector(".container");

function checkTime(){
    if (hourCheck < hourID){
        container.textBox.setAttribute("style, background-color: green;");
        console.log("working");
}
    else if (hourCheck == hourID){
        container.textBox.setAttribute("style, background-color: red;");
        console.log("working");
    }
    else {
        container.textBox.setAttribute("style, background-color: gray;");
        console.log("working");
    }
}

checkHour();
checkTime();