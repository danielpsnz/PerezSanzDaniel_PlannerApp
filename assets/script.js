// Variables
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH"); // Variable that gives the current hout
var currentHourInt = parseInt(currentHour); // Parse it so that hour returns as an integer

// Set data attributes to each hour input element
$("#9am").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10am").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11am").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12pm").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1pm").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2pm").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3pm").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4pm").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5pm").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));