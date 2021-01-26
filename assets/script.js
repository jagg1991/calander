var todaysDate = moment().format("MMMM DD YYYY");
$("#currentDay").text(todaysDate);

var container = $(".container");

var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

for (let i = 0; i < times.length; i++) {
    var row = $("<div>").addClass("row");
    var timeBlock = $("<div>").addClass("time-block col-1").text(times[i]);
    var textArea = $("<textarea>").addClass("col-10");
    var button = $("<button>").addClass("saveBtn col-1");
    container.append(row);
    row.append(timeBlock, textArea, button);

}

$(".saveBtn").on("click", function () {
    var textContent = $(this).prev().val();
    var timeEl = $(this).prev().prev().text;
    console.log(textContent);
    console.log(timeEl);
    localStorage.setItem("planner", textContent);
    localStorage.setItem("savedPlanner", timeEl)
});