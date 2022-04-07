var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));


var hourMoment = currentDay.format("H");

var timeBlock = $(".time-block");


var hourID = timeBlock.attr("#hour-");
console.log(hourID);

function timeCheck(){
    for (var i = 9; i < timeBlock.length; i++){
    
    if (parseInt(hourID.slice(-2) < hourMoment)){
        timeBlock.addClass("past");
    }
    else if (parseInt(hourID.slice(-2) === hourMoment)){
        timeBlock.addClass("present");
    }
    else{
        timeBlock.addClass("future");
    }
}
}
timeCheck();


 
// var hourMoment = computer gets hour from Moment
//           for timeBlock in all divs with class time-block
//             var hourID = getting ID from timeBlock 
//             if hourMoment is equal to hourID 
//               add present class to timeBlock
//             else if hourMoment is less than hourID
//               add past class to timeBlock
//             else 
//               add future class to timeBlock


//take the hour part of IDs out
//use parseint to turn from a string into a sequence


