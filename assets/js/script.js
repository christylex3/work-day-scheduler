// Variable that holds the current date of the day
var currentDate;

// Array that holds the hours from 9AM to 5PM by military time
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// Array that holds the timeblock's IDs
var timeblocksId = ["#nineOClock", "#tenOClock", "#elevenOClock", "#twelveOClock", "#oneOClock", "#twoOClock", "#threeOClock", "#fourOClock", "#fiveOClock"];

// Variables that hold the specified element by ID
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

// Adds "click" event listener to each save buttons
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

// Displays current date at top
function displayDate () {

    // Formats currentDate to be "day of week, Month date of month"
    currentDate = moment().format("dddd, MMMM Do");

    // Appends currentDate to the element with an ID of "currentDay"
    $("#currentDay").text(currentDate);
}

// Marking timeblocks as "past", "present", or "future"
function coloringTimeblock () {

    // Variable that stores the current hour (military time style)
    var currentHour = moment().hour();

    // Loops through each timeblock 
    for (var i = 0; i < hours.length; i++) {
        var timeblock = document.querySelector(timeblocksId[i]);
        
        // If the current hour is not equal to the timeblock's hour, set timeblock as "past"
        if (currentHour !== hours[i]) {
            timeblock.classList.add("past");
            timeblock.classList.remove("present");
            timeblock.classList.remove("future");
        }

        // If the current hour does equal to the timeblock's hour, set timeblock as "present"
        if (currentHour == hours[i]) {
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

// Grabs the previous saved info and displays them on the timeblock they were saved on
function getPreviousInfo() {

    
    var test = JSON.parse(localStorage.getItem("contents"));
    var textareaElements = document.getElementsByTagName("textarea");

    if (test === null) {
        return;
    }

    for (var i = 0; i < test.length; i++) {
        if (test[i] !== null && test[i].time === textareaElements[i].id) {
            textareaElements[i].value = test[i].textEvent;
        }
    }
}

// TODO: Add textarea.value and textarea.id into local storage
function saveInfo (event) {

    // Grabs the text area within the same container
    var buttonParent = $(this).parent()[0];
    var textarea = buttonParent.querySelector("textarea");

    var textareaContent = {
        textEvent: textarea.value,
        time: textarea.id
    };

    // Grabs all of the textarea elements
    var textareaElements = document.getElementsByTagName("textarea");

    // Loops through the textareaElements
    for (var i = 0; i < textareaElements.length; i++) {

        // If the localStorage's id matches the timeblock's id, then
        if (textareaContent.time === textareaElements[i].id) {
            schedule[i] = textareaContent;
        }
    }
    localStorage.setItem("contents", JSON.stringify(schedule));
}

// Calls the following functions
displayDate();
coloringTimeblock();
getPreviousInfo();