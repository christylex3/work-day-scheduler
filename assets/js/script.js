var currentDate;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var timeblocksId = ["#nineOClock", "#tenOClock", "#elevenOClock", "#twelveOClock", "#oneOClock", "#twoOClock", "#threeOClock", "#fourOClock", "#fiveOClock"];

// Displays current date at top
function displayDate () {
    currentDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDate);
}

// Marking timeblocks as "past", "present", or "future"
function coloringTimeblock () {

    // Variable that stores the current hour by military time
    var currentHour = moment().hour();

    // Loops through each timeblock 
    for (var i = 0; i < hours.length; i++) {
        var timeblock = document.querySelector(timeblocksId[i]);
        
        // If the current hour does not equate to the timeblock's hour, set timeblock as "past"
        if (currentHour !== hours[i]) {
            timeblock.classList.add("past");
            timeblock.classList.remove("present");
            timeblock.classList.remove("future");
        }

        // If the current hour does equate to the timeblock's hour, set timeblock as "present"
        if (currentHour === hours[i]) {
            timeblock.classList.add("present");
            timeblock.classList.remove("past");
            timeblock.classList.remove("future");
        }

        // If the current hour is less than timeblock's hour, set timeblock as "future"
        if (currentHour < hours[i]) {
            timeblock.classList.add("future");
            timeblock.classList.remove("present");
            timeblock.classList.remove("past");
        }
    }
}

displayDate();
coloringTimeblock();
