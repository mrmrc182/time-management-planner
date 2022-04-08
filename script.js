var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));


var hourMoment = currentDay.format("H");
console.log(hourMoment);


var containerAtt = $(".container");
timeBlock = $(".time-block");
var hourID = containerAtt.children("div").attr("id");
parsedHour = parseInt(hourID - 2))

for (var i = 9; i < containerAtt.length; i++) 

if (hourID[i] < hourMoment){
    timeBlock[i].addClass(".past");
    timeBlock[i].removeClass(".present");
    timeBlock[i].removeClass(".future");
}
else if (hourID[i] === hourMoment){
    timeBlock[i].addClass(".present");
    timeBlock[i].removeClass(".past");
    timeBlock[i].removeClass(".future");
}
else {
    timeBlock[i].addClass(".future");
    timeBlock[i].removeClass(".present");
    timeBlock[i].removeClass(".past");
}


//           for timeBlock in all divs with class time-block
//             var hourID = getting ID from timeBlock 
//             if hourMoment is equal to hourID 
//               add present class to timeBlock
//             else if hourMoment is less than hourID
//               add past class to timeBlock
//             else 
//               add future class to timeBlock
//get the number from the ID
//parse it into a string

// var timeBlock = $(".time-block");
// var hourLoop = $(".time-block").attr("id".value);
// var hourID = parseInt(slice(hourLoop - 2));
// console.log(hourID);

// timeBlock.each (function timeCheck(el){
    

//     for (var i = 9; i < timeBlock.length; i++)

//     if (hourID[i] < hourMoment) {
//         timeBlock[i].addClass("past")
//     }
//     else if (hourID[i] === hourMoment) {
//         timeBlock[i].addClass("present");
//     }
//     else {
//         timeBlock[i].addClass("future");
//     }
// })

// timeCheck(el);

 
// var hourMoment = computer gets hour from Moment



//take the hour part of IDs out
//use parseint to turn from a string into a sequence