var currentTime = parseInt(moment().hour())
var currentDay = $("#currentDay")
var hour = $(".hour");
var calendarEvent = {};

console.log(moment().hour())

currentDay.text(moment().format('dddd, LL'));


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
    var textInput = JSON.stringify(calendarEvent);
    console.log(calendarEvent)
    

});

$(".saveBtn").click(function(){
    
    console.log("saveBtn clicked");
    saveEvent();
});

var saveEvent = function() {
    localStorage.setItem("calendarEvent", JSON.stringify(calendarEvent));
}