var currentDate;
var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
console.log(moment().hour());
// Displays current date at top
function displayDate () {
    currentDate.textContent = moment().format("dddd, MMM Do");
    // $("#currentDay").text(currentDate);
}

function coloringTimeblock () {

    var comparedHour = moment().hour();

    // if this is the hour that's happening, 
    for (var i = 0; i > hours.length; i++) {
        if (comparedHour !== hours[i]) {
            var timeblock = document.querySelector("#" + comparedHour);
            timeblock.classList.add("past");
            timeblock.classList.remove("present");
            timeblock.classList.remove("future");
        } else if () {
            
        }
    }
    if (currentDate.moment() == ) {
        // if 
    }
}

displayDate();
coloringTimeblock();
