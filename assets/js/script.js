var currentDate;
var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
console.log(moment());
// Displays current date at top
function displayDate () {
    currentDate = moment().format("dddd, MMM Do");
    $("#currentDay").text(currentDate);
}

function coloringTimeblock () {

    var currentHour = moment().hour();

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
