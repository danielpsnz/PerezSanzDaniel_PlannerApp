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

//start jQuery 
$(document).ready(function () {

    // Function to store inputted data 
    renderPlans();

  // Show Date and Time in Header 
  $("#currentDay").append();

  function addDate() { 
  $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
  
  } setInterval(addDate, 1000);

  // Change color in each row by adding in am attribute (above) for each input line to reflect the current hour 
  for (var i = 0; i <= 12; i++) {  

      var inputHour = $("#" + i + "Row").attr("data-time"); // Variable for the hour of the row 
      var inputHourInt = parseInt(inputHour); // Parse it so that hour returns as an integer

      if (currentHourInt === inputHourInt) {
          $("#" + i + "Row").addClass("present"); // Applies red color if within the present hour 
      }
      if (currentHourInt > inputHourInt) { // Applies grey color if hour is in the future 
          $("#" + i + "Row").addClass("past");
      }
      if (currentHourInt < inputHourInt) { // Applies green color if hour is in the future 
          $("#" + i + "Row").addClass("future");
      }
    }

    // Function that triggers data to be store in local storage when save button clicked 
    saveBtn.on("click", function () { // On-click 

      var rowHour = $(this).attr("data-hour"); // variable referencing the assigned hour row in the html doc 
      var input = $("#" + rowHour + "Row").val(); // saves the text that has been entered into the input column 
      localStorage.setItem(rowHour, input); //saves input to local storaage
    });
  
    //  Function to retrieve the stored input that was saved in each input 
    function renderPlans() {
      for (var i = 0; i <= 12; i++) {
      $("#" + i + "Row").val(localStorage.getItem(i));
      }
    }
});