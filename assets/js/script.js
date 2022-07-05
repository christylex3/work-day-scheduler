var currentDate;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var timeblocksId = ["#nineOClock", "#tenOClock", "#elevenOClock", "#twelveOClock", "#oneOClock", "#twoOClock", "#threeOClock", "#fourOClock", "#fiveOClock"];

// Displays current date at top
function displayDate () {
    currentDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDate);
}


function coloringTimeblock () {
    var currentHour = moment().hour();
    // if this is the hour that's happening, 
    for (var i = 0; i < hours.length; i++) {
        var timeblock = document.querySelector(timeblocksId[i]);

        // If the 
        if (currentHour !== hours[i]) {
            timeblock.classList.add("past");
            timeblock.classList.remove("present");
            timeblock.classList.remove("future");
        }
        if (currentHour === hours[i]) {
            timeblock.classList.add("present");
            timeblock.classList.remove("past");
            timeblock.classList.remove("future");
        }
        if (currentHour > hours[i]) {

        }
    }
}

// testing hour
// var testingHour = moment().hour();
// $("#testing").text("testingHour:" + testingHour);

// var testingHour2 = moment().format();
// var timeblock = document.getElementById("twoOClock");
// console.log(timeblock);

displayDate();
coloringTimeblock();
