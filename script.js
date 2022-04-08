var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

// keepPlan();

function hourUpdate (){
var timeBlock = $(".time-block");
var hourMoment = parseInt(currentDay.format("H"));
console.log(hourMoment);
$(".time-block").each(function timeTime(){
    var blockHour = parseInt(
        $(this).attr("id")
    );
    console.log(blockHour);
    // for (var i=0; i < blockHour.length; i++)
    if (blockHour < hourMoment){
        $(this).addClass("past");
        // $(this).removeClass("present");
        // $(this).removeClass("future");
    }
    else if (blockHour === hourMoment){
        $(this).addClass("present");
        // $(this).removeClass("past");
        // $(this).removeClass("future");
    }
    else {
        $(this).addClass("future");
        // $(this).removeClass("present");
        // $(this).removeClass("past");
    };
})
}

hourUpdate();

var saveBtn = $(".saveBtn")

    var button = $(this);
    var plannerValue = $(".description").val();
    var plannerHour = button.closest(".time-block").attr("id");

saveBtn.on("click", function () {
    var button = $(this);
    var plannerValue = $(".description").val();
    var plannerHour = button.closest(".time-block").attr("id");
    if (!plannerHour || !plannerValue){
        return;
    }
    var storageAttempt = {
        plannerHour: plannerHour,
        plannerValue: plannerValue,
    }
    localStorage.setItem("storageAttempt", JSON.stringify(storageAttempt));
})

if (storageAttempt) {
var storageAttempt = JSON.parse(localStorage.getItem("storageAttempt"));
plannerValue.val = storageAttempt.plannerValue;
}



// function keepPlan(){
// // want to retrieve item from local storage and display it on its proper textbox
// var inputCheck = localStorage.getItem("storageAttempt");
// console.log(inputCheck);
// $(".description").text() === inputCheck; 
// }