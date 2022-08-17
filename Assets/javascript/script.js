var currentTime = parseInt(moment().hour())
var currentDay = $("#currentDay")
var hour = $(".hour");
var calendarEvent = {};



console.log(moment().hour())

currentDay.text(moment().format('dddd, LL'));


hour.each(function(){
    var workTime = parseInt($(this).attr("data-id"))
    console.log(workTime)
    if (workTime < currentTime) {
        console.log("past")
        // current time class gets removed
        $("div").addClass("past");
        // then past time class get added
    }
    else if (workTime > currentTime) {
        console.log("future")
        //add future class to the added event
        $("div").addClass("future")
    }

    else {
        console.log("present")
        //future class is removed
        $("div").addClass("present")
        //present class is added
    }
})

// calls click to edit event
$(".description").on("click", function() {
    var text = $(this).text().trim();
    
    var textInput = $("<textarea>").addClass("col-10 event-description").val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");


})


$(".saveBtn").click(function(){
    console.log("saveBtn clicked");
    saveEvent();
})

var saveEvent = function() {
    localStorage.setItem("calendarEvent", JSON.stringify(calendarEvent));
}