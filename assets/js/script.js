var currentDate;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var hoursId = ["nineOClock", "tenOClock", "elevenOClock", "twelveOClock", "oneOClock", "twoOClock", "threeOClock", "fourOClock", "fiveOClock"];
var idTimeblocks = ["#9"];

// Displays current date at top
function displayDate () {
    currentDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDate);
}

// testing hour
var testingHour = moment().hour();
$("#testing").text("testingHour:" + testingHour);

var testingHour2 = moment().format();
var timeblock = document.querySelector("time9");
console.log(timeblock);

function coloringTimeblock () {

    var currentHour = moment().format();
    

    // if this is the hour that's happening, 
    for (var i = 0; i > hours.length; i++) {
        var timeblock = document.querySelector("#" + currentHour);
        if (currentHour !== hours[i]) {
            // if the hour is in the past, how does it know which hour is forward?
            // currentHour < hours[i]? What about 12PM < 3PM?
            timeblock.classList.add("past");
            timeblock.classList.remove("present");
            timeblock.classList.remove("future");
        }
        if (currentHour === hours[i]) {
            timeblock.classList.add("present");
            timeblock.classList.remove("past");
            timeblock.classList.remove("future");
            // for () {

            // }
        }
    }
//     if (currentDate.moment() == ) {
//         // if 
//     }
}

displayDate();
coloringTimeblock();
