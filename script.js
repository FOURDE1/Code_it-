document.getElementById("selectButton").addEventListener("click", function () {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Selected Group: ";
   
    var animationDuration = 100; // Faster animation duration in milliseconds
    var iterations = 20; // Number of iterations before making a choice
    
    var groupSquares = document.querySelectorAll(".group-square");
    var totalGroups = groupSquares.length;
    
    var currentGroupIndex = 0;
    var currentIteration = 0;
    var selectedGroupIndex = null;
    
    var animationInterval = setInterval(function () {
        groupSquares.forEach(square => square.classList.remove("active"));
        
        // Choose a random group and highlight it
        selectedGroupIndex = Math.floor(Math.random() * totalGroups);
        groupSquares[selectedGroupIndex].classList.add("active");
        selectedGroupIndex++;
        resultElement.innerHTML = "Final Selection: " + selectedGroupIndex;
        if (currentGroupIndex === 0) {
            currentIteration++;
        }
        
        if (currentIteration >= iterations) {
            clearInterval(animationInterval);
            
            setTimeout(function () {
                var selectedGroup = selectedGroupIndex + 1;
                
               
            }, animationDuration * iterations);
        }
    }, animationDuration);
});

document.addEventListener("DOMContentLoaded", function () {
    var countdownInterval;
    var targetDate;
    var count=0;
    function a (){
        if(count!=0){
            document.getElementById("startCount").innerHTML="Restart";    
        }
    }
    function updateCountdown() {
        var currentDate = new Date();
        var timeLeft = targetDate - currentDate;

        if (timeLeft <= 0) {
            document.getElementById("countdown").style.display = "none";
            document.getElementById("timeUp").style.display = "block";
            clearInterval(countdownInterval);
        } else {
            var seconds = Math.ceil(timeLeft / 1000);
            document.getElementById("countdown").innerHTML = "<h1 class='mt-2'>Time: " + seconds + "s</h1>";
        }
    }

    function startCountdown() {
        count++;
        a();
        
        document.getElementById("container").classList.add("random-disapear");
        document.getElementById("timeUp").style.display = "none";
        document.getElementById("countdown-container").style.display = "block";
        document.getElementById("logo-container").style.display = "block";
        targetDate = new Date();
        targetDate.setSeconds(targetDate.getSeconds() + 11);
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    function restartCountdown() {
        
        clearInterval(countdownInterval);

        startCountdown();
        document.getElementById("countdown").style.display = "block";
    }
    document.getElementById("startCount").addEventListener("click", startCountdown);
    document.getElementById("startCount").addEventListener("click", restartCountdown);
});
