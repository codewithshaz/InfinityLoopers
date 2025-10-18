// script.js

// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", function () {

  // Handle "Get Started" button click
  const getStartedBtn = document.getElementById("getStarted");

  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function () {
      // Navigate to the build skills and profile page
      window.location.href = "build.html";
    });
  }

});
