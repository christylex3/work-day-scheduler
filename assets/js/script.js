var currentDate;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var timeblocksId = ["#nineOClock", "#tenOClock", "#elevenOClock", "#twelveOClock", "#oneOClock", "#twoOClock", "#threeOClock", "#fourOClock", "#fiveOClock"];
var saveButton1 = document.querySelector("#saveButton1");
var saveButton2 = document.querySelector("#saveButton2");
var saveButton3 = document.querySelector("#saveButton3");
var saveButton4 = document.querySelector("#saveButton4");
var saveButton5 = document.querySelector("#saveButton5");
var saveButton6 = document.querySelector("#saveButton6");
var saveButton7 = document.querySelector("#saveButton7");
var saveButton8 = document.querySelector("#saveButton8");
var saveButton9 = document.querySelector("#saveButton9");
var schedule = new Array(9);
console.log(schedule);

schedule[0] = "hi";
console.log(schedule);

if (saveButton1) {
    saveButton1.addEventListener("click", saveInfo);
}

if (saveButton2) {
    saveButton2.addEventListener("click", saveInfo);
}

if (saveButton3) {
    saveButton3.addEventListener("click", saveInfo);
}

if (saveButton4) {
    saveButton4.addEventListener("click", saveInfo);
}

if (saveButton5) {
    saveButton5.addEventListener("click", saveInfo);
}

if (saveButton6) {
    saveButton6.addEventListener("click", saveInfo);
}

if (saveButton7) {
    saveButton7.addEventListener("click", saveInfo);
}

if (saveButton8) {
    saveButton8.addEventListener("click", saveInfo);
}

if (saveButton9) {
    saveButton9.addEventListener("click", saveInfo);
}
// $(saveButton).click(saveInfo()); ?

// Displays current date at top
function displayDate () {

    // Formats currentDate to be "day of week, Month date of month"
    currentDate = moment().format("dddd, MMMM Do");

    // Appends currentDate to the element with an ID of "currentDay"
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


// Make a function about local storage for text area and functionable save button
// If they click the save button, take the save button within that element and 

// function getPreviousInfo() {

//     // Grabs the existing textarea's text
//     var eventInfo = localStorage.getItem("event");
//     var time = localStorage.getItem("time");

//     if (!eventInfo || !time) {
//         return;
//     }

//     time.textContent = eventInfo;
    
// }

// TODO: Add textarea.value and textarea.id into local storage
function saveInfo (event) {
    var buttonParent = $(this).parent()[0]; //article
    var textarea = buttonParent.querySelector("textarea");

    localStorage.setItem("event", textarea.value);
    localStorage.setItem("time", textarea.id);

    // var id = textarea.id;
    // console.log(value);
    // console.log(id);
    // var textarea = buttonParent.querySelector("textarea");
    // var value = textarea.value;
    // console.log(this);
    // console.log($(this));
    // console.log($(this).parent()[0]);
}

displayDate();
coloringTimeblock();
// getPreviousInfo();