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
// var containerAtt = $(".container");
// $(".time-block").each(function);
// var hourID = containerAtt.children("div").attr("id");
// parsedHour = parseInt(hourID - 2))

// for (var i = 9; i < containerAtt.length; i++) 




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