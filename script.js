// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var timeLabels = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
  var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]


  for(i = 0; i < 9; i++) {

    // color-coding the time block
    let appliedClass;
    var currentHour = dayjs().hour();

    if(currentHour > hours[i]) {
      appliedClass = "past";
    } else if(currentHour == hours[i]) {
      appliedClass = "present";
    } else {
      appliedClass = "future";
    }


    // loading saved text
    var savedText = localStorage.getItem(`hour-${hours[i]}`) || ""
  
    $("#time-blocks").append(
      `<div id="hour-${hours[i]}" class="row time-block ${appliedClass}">
          <div class="col-2 col-md-1 hour text-center py-3">${timeLabels[i]}</div>
          <textarea class="col-8 col-md-10 description" rows="3"> ${savedText}</textarea>
          <button class="btn saveBtn col-2 col-md-1" aria-label="save">
            <i class="fas fa-save" aria-hidden="true"></i>
          </button>
      </div>`
    )

    
  }

    

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var currentDate = dayjs().format('MM/DD/YYYY') // 
  
  $("#currentDay").text(currentDate)
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function() {
    var textToSave = $(this).siblings("textarea").val();
    var key = $(this).parent().attr("id")

    localStorage.setItem(key, textToSave)

  })  
});
