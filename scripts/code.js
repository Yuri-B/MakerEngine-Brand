
function start() {
  // start and delegate everything here
  // load stuff when the DOM has loaded!!!
  window.onload = function() {
    writeCurrentYear()
  }
}

function writeCurrentYear() {
  var presentYear = new Date().getFullYear();
  var dateElement = document.getElementById("displayYear");

  dateElement.textContent = presentYear;
  dateElement.setAttribute("datetime", presentYear);
}


start()
