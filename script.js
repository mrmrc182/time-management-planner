var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));



function hourUpdate (){
var timeBlock = $(".time-block");
var hourMoment = parseInt(currentDay.format("H"));
console.log(hourMoment);
$(".time-block").each(function timeTime(){
    var blockHour = parseInt(
        $(this).attr("id")
    );
    console.log(blockHour);
    if (blockHour < hourMoment){
        $(this).addClass("past");
    }
    else if (blockHour === hourMoment){
        $(this).addClass("present");
    }
    else {
        $(this).addClass("future");
    };
})
}

hourUpdate();

// this is what i put for storing the inputs in localstorage, and my attempt at displaying it on refresh
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

//attempt at displaying it on the page
// function grabStorage() {
// var storageAttempt = JSON.parse(localStorage.getItem("storageAttempt"));
// if (!storageAttempt){
//     return;
// }
// else{
//     $(".description").val(storageAttempt.plannerValue);
//     $(`${storageAttempt.plannerHour}`).value(plannerValue);
// }
// }
// grabStorage();
// console.log(storageAttempt);
// console.log(plannerValue);
// console.log(storageAttempt.plannerValue);



// // want to retrieve item from local storage and display it on its proper textbox
// var inputCheck = localStorage.getItem("storageAttempt");