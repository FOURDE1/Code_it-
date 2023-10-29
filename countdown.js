document.addEventListener("DOMContentLoaded", function () {
    var countdownInterval;
    var targetDate;
  
    
    function updateCountdown() {
        var currentDate = new Date();
        var timeLeft = targetDate - currentDate;

        if (timeLeft <= 0) {
            document.getElementById("countdown").style.display = "none";
            document.getElementById("timeUp").style.display = "block";
            clearInterval(countdownInterval);
        } else {
            var seconds = Math.ceil(timeLeft / 1000);
            document.getElementById("countdown").innerHTML = "Time: " + seconds + "s";
        }
    }

    function startCountdown() {
        document.getElementById("packageContainer").style.display = "block";
        document.getElementById("timeUp").style.display = "none";
        document.getElementById("packageSelect").style.display = "none";
        document.getElementById("startRound").style.display = "none";
        document.getElementById("logo-container").style.display = "none";
        document.getElementById("countdown-container").style.display = "block";
        targetDate = new Date();
        targetDate.setSeconds(targetDate.getSeconds() + 6);
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    function restartCountdown() {
        
        clearInterval(countdownInterval);

        startCountdown();
        document.getElementById("countdown").style.display = "block";
    }

    function handleKeyboardArrows(event) {
        // Check if the left arrow key was pressed
        if (event.key === "ArrowLeft") {
            document.getElementById("previousButton").click(); // Simulate a click on the "Previous" button

            restartCountdown();
        }
        // Check if the right arrow key was pressed
        else if (event.key === "ArrowRight") {
            document.getElementById("nextButton").click(); // Simulate a click on the "Previous" button
            restartCountdown();
        }
    }

    document.getElementById("startRound").addEventListener("click", startCountdown);
    // document.getElementById("countdown").addEventListener("click", startCountdown);
    document.getElementById("nextButton").addEventListener("click", restartCountdown);
    document.getElementById("previousButton").addEventListener("click", restartCountdown);
    document.addEventListener("keydown", handleKeyboardArrows);
   
});
