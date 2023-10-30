document.addEventListener("DOMContentLoaded", function () {
    var countdownInterval;
    var targetDate;
    var packageSelected = false;
    var selectedPackageId = "1"; // Default selected package ID

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
        if (packageSelected) {
            var selectedPackage = document.getElementById("packageSelect").value;

            var selectedPackageContainer = document.getElementById(selectedPackage);
            selectedPackageId = selectedPackage[7];

            // Hide all package containers
            var packageContainers = document.querySelectorAll(".package-container");
            for (var i = 0; i < packageContainers.length; i++) {
                packageContainers[i].style.display = "none";
            }

            // Show the selected package container
            if (selectedPackageContainer) {
                selectedPackageContainer.style.display = "block";
            }

            document.getElementById("packageSelect").style.display = "none";
            document.getElementById("startRound").style.display = "none";
            document.getElementById("logo-container").style.display = "none";
            document.getElementById("countdown-container").style.display = "block";

            targetDate = new Date();
            targetDate.setSeconds(targetDate.getSeconds() + 6);
            countdownInterval = setInterval(updateCountdown, 1000);
            updateCountdown();
        }
    }

    function restartCountdown() {
        clearInterval(countdownInterval);
        startCountdown();
        document.getElementById("timeUp").style.display = "none";
        document.getElementById("countdown").style.display = "block";
    }

    // Added event listeners for arrow keys
    function handleKeyboardArrows(event) {
        if (packageSelected) {
            if (event.key === "ArrowLeft") {
                document.getElementById("previousButton" + selectedPackageId).click();
                restartCountdown();
            } else if (event.key === "ArrowRight") {
                // Check if the next element is the "end" element
                var nextElement = document.getElementById("nextButton" + selectedPackageId);
                if (nextElement && nextElement.classList.contains("end")) {
                    // Reset to the start and show package control and logo
                    packageSelected = false;
                    document.getElementById("packageSelect").style.display = "block";
                    document.getElementById("startRound").style.display = "block";
                    document.getElementById("logo-container").style.display = "block";
                    document.getElementById("countdown-container").style.display = "none";
                } else {
                    document.getElementById("nextButton" + selectedPackageId).click();
                    restartCountdown();
                }
            }
        }
    }

    // Add event listeners
    document.getElementById("startRound").addEventListener("click", startCountdown);
    document.getElementById("packageSelect").addEventListener("change", function () {
        packageSelected = true; // Set the flag to true when a package is selected
    });

    // Event listener for keyboard arrows
    document.addEventListener("keydown", handleKeyboardArrows);

    // Initialize the next and previous button listeners for all packages
    var packageButtons = document.querySelectorAll(".index");
    packageButtons.forEach(function (button) {
        button.addEventListener("click", restartCountdown);
    });
});
