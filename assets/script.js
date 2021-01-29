//variable for the date
var todaysDate = moment().format("MMMM DD YYYY");
//variable for the time 
var todaysTime = moment().format("h:mm a")
//adds the date to #currentDay id
$("#currentDay").text(todaysDate)
//adds the date to #currentTime id
$("#currentTime").text(todaysTime);

var container = $(".container");
//an array for the time 
var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var military = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

//for loop to add divs, textarea, and buttons to the page 
for (let i = 0; i < times.length; i++) {
    var row = $("<div>").addClass("row");
    var timeBlock = $("<div>").addClass("time-block col-1").text(times[i]);
    var textArea = $("<textarea>").addClass("col-10").attr("id", times[i]).attr("data-hour", military[i]);
    var button = $("<button>").addClass("saveBtn col-1").text("SAVE!")
    container.append(row);
    row.append(timeBlock, textArea, button);



}
//funtion for the save button 
$(".saveBtn").on("click", function () {
    // associated wiht what ever button was clicked 
    var textContent = $(this).prev().val();
    // this is going to be a value of time slots for text content 
    var timeEl = $(this).prev().prev().text();

    localStorage.setItem(timeEl, textContent);


});



//for loop to add to local storage 
for (var j = 0; j < times.length; j++) {
    console.log(times[j], localStorage.getItem(times[j]));
    // grabing text area by id 
    var timesEl = document.getElementById(times[j]);
    // getting local storage using id
    var timesLocal = localStorage.getItem(times[j]);
    timesEl.textContent = timesLocal;
}

function checkTime() {
    var currentTime = moment().hours()

    $(".col-10").each(function () {
        var blockHour = $(this).data("hour")

        if (blockHour < currentTime) {
            $(this).addClass("past");
        } else if (blockHour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
checkTime();