var currentTime = parseInt(moment().hour())
var currentDay = $("#currentDay")
var hour = $(".hour");
var calendarEvent = {};


console.log(moment().hour())

currentDay.text(moment().format('dddd, LL'));


//  this function identifies each data-id attribute and compares it to the current hour
hour.each(function(){
    var workTime = parseInt($(this).next().attr("data-id"))
    
    if (workTime < currentTime) {
        
        $(this).next().addClass("past");
        // then past time class get added
        console.log("past");
    }
    else if (workTime > currentTime) {
        //add future class to the added event
        $(this).next().addClass("future");
        console.log("future");
    }

    else if (workTime === currentTime){
        
        $(this).next().addClass("present");
        //present class is added
        console.log("present");
    }
})

// calls click to edit event
$(".description").on("input", function() {
    var text = $(this).val();
    // console.log(text)

    var calendarEvent = {text}
    
    console.log(calendarEvent)
});

// This is the JQuery listener for the save-button element
$(".saveBtn").click(function(){
    
    console.log("saveBtn clicked");
    saveEvent();
});

// This function is intended to push the local text to the 
var saveEvent = function() {

    var eventInput = {text};
    var storage = localStorage.getItem("user-input");
    if(storage == null) {
        var storageArray = []
        storageArray.push(eventInput)
        localStorage.setItem("user-input", JSON.stringify(storageArray));
    }
    else {
        var storageArray = JSON.parse(storage)
        storageArray.push(eventInput)
        localStorage.setItem("user-input", JSON.stringify(storageArray));
    }


}