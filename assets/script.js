var todaysDate = moment().format("MMMM DD YYYY");
var todaysTime = moment().format("h:mm:ss a")
$("#currentDay").text(todaysDate)
$("#currentTime").text(todaysTime);

//function setTime() {
// Sets interval in variable
//var timeInterval = setInterval(function () {
// todaysTime++;
//timeInterval = $("#currentTime").text(todaysTime);



//}, 1000);
//}

var container = $(".container");

var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];



for (let i = 0; i < times.length; i++) {
    var row = $("<div>").addClass("row");
    var timeBlock = $("<div>").addClass("time-block col-1").text(times[i]);
    var textArea = $("<textarea>").addClass("col-10").attr("id", times[i]);
    var button = $("<button>").addClass("saveBtn col-1");
    container.append(row);
    row.append(timeBlock, textArea, button);


}

$(".saveBtn").on("click", function () {
    var textContent = $(this).prev().val(); // associated wiht what ever button was clicked 
    var timeEl = $(this).prev().prev().text(); // this is going to be a value of time slots for text content 

    localStorage.setItem(timeEl, textContent);


});



for (var j = 0; j < times.length; j++) {
    console.log(times[j], localStorage.getItem(times[j]));
    var timesEl = document.getElementById(times[j]); // grabing text area by id 
    var timesLocal = localStorage.getItem(times[j]); // getting local storage using id 
    timesEl.textContent = timesLocal;
}

//setTime();
