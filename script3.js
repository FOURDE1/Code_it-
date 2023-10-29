document.addEventListener("DOMContentLoaded", function () {
    var countdownInterval;
    var targetDate;
    var rulesDiv = document.getElementById("rules");

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
        document.getElementById("timeUp").style.display = "none";
        document.getElementById("countdown-container").style.display = "block";
        targetDate = new Date();
        targetDate.setSeconds(targetDate.getSeconds() + 6);
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();

        // Hide the rules div and adjust sizes when starting the countdown
        rulesDiv.style.transform = "scale(0.8)"; // Scale the rules div to 80% of its original size
        document.getElementById("countdown").style.fontSize = "64px"; // Increase the font size
    }

    function restartCountdown() {
        clearInterval(countdownInterval);
        startCountdown();
        document.getElementById("countdown").style.display = "block";
    }

    document.getElementById("start").addEventListener("click", startCountdown);
    document.getElementById("start").addEventListener("click", restartCountdown);
});
