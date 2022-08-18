var currentTime = parseInt(moment().hour())
var currentDay = $("#currentDay")
var hour = $(".hour");
var calendarEvent = {};



console.log(moment().hour())

currentDay.text(moment().format('dddd, LL'));


hour.each(function(){
    var workTime = parseInt($(this).next().attr("data-id"))
    // console.log($(this).next().addClass("past"))
    if (workTime < currentTime) {
        // current time class gets removed
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
        //future class is removed
        $(this).next().addClass("present");
        //present class is added
        console.log("present");
    }
})

// calls click to edit event
$(".description").on("click", function() {
    var text = $(this).text().trim();
    
    var textInput = $("<textarea>").addClass("col-10 description").val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");
    console.log(textInput.value)

})


$(".saveBtn").click(function(){
    console.log("saveBtn clicked");
    saveEvent();
})

var saveEvent = function() {
    localStorage.setItem("calendarEvent", JSON.stringify(calendarEvent));
}