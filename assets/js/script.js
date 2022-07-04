// Displays current date at top
function displayDate () {
    var currentDate = moment().format("dddd, MMM Do");
    $("#currentDay").text(currentDate);
}

displayDate();
