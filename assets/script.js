//variable for the date
var todaysDate = moment().format("MMMM DD YYYY");
//variable for the time 
var todaysTime = moment().format("h:mm:ss a")
//adds the date to #currentDay id
$("#currentDay").text(todaysDate)
//adds the date to #currentTime id
$("#currentTime").text(todaysTime);

var future = { "background-color": "grey", "color": "black", }

//function setTime() {
// Sets interval in variable
//var timeInterval = setInterval(function () {
// todaysTime++;
//timeInterval = $("#currentTime").text(todaysTime);



//}, 1000);
//}

var container = $(".container");
//an array for the time 
var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];


//for loop to add divs, textarea, and buttons to the page 
for (let i = 0; i < times.length; i++) {
    var row = $("<div>").addClass("row");
    var timeBlock = $("<div>").addClass("time-block col-1").text(times[i]);
    var textArea = $("<textarea>").addClass("col-10").attr("id", times[i]);
    var button = $("<button>").addClass("saveBtn col-1").text("SAVE!")
    container.append(row);
    row.append(timeBlock, textArea, button);



}
//funtion for the save button 
$(".saveBtn").on("click", function () {
    var textContent = $(this).prev().val(); // associated wiht what ever button was clicked 
    var timeEl = $(this).prev().prev().text(); // this is going to be a value of time slots for text content 

    localStorage.setItem(timeEl, textContent);


});



//for loop to add to local storage 
for (var j = 0; j < times.length; j++) {
    console.log(times[j], localStorage.getItem(times[j]));
    var timesEl = document.getElementById(times[j]); // grabing text area by id 
    var timesLocal = localStorage.getItem(times[j]); // getting local storage using id 
    timesEl.textContent = timesLocal;
}

