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

// Array that is created with length of 9
var schedule = new Array(9);

// When save buttons are pressed, call saveInfo()
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

// Grabs the timeblock's saved info and displays them accordingly on timeblock they were saved on
function getPreviousInfo() {

    // Variable that holds the saved contents from the local storage
    var savedContents = JSON.parse(localStorage.getItem("contents"));
    var textareaElements = document.getElementsByTagName("textarea");

    // If there is nothing in the local storage, return
    if (savedContents === null) {
        return;
    }

    // Loops through the savedContents
    for (var i = 0; i < savedContents.length; i++) {

        // If the index of the savedContents is not null AND the index's ID matches the textarea's ID,
        // then let the textarea's content have the same value as savedContents
        if (savedContents[i] !== null && savedContents[i].time === textareaElements[i].id) {
            textareaElements[i].value = savedContents[i].textEvent;
        }
    }
}

// Saves the textarea's value by storing it into local storage
function saveInfo (event) {

    // Variable that holds the text area within the same container
    var buttonParent = $(this).parent()[0];
    var textarea = buttonParent.querySelector("textarea");

    // Object variable that holds the textarea's value as textEvent and textarea's id as time
    var textareaContent = {
        textEvent: textarea.value,
        time: textarea.id
    };

    // Grabs all of the textarea elements and loops through them
    var textareaElements = document.getElementsByTagName("textarea");
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