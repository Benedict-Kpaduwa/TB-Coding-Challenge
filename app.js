(function (){
    const wheel = document.querySelector(".wheel");
    const startButton = document.querySelector(".button");
    const back = document.querySelector(".back");
    let deg = 0;

    startButton.addEventListener("click", () => {
        var audio = new Audio("assets/RouletteWheel.mp3");
        audio.play();
        // Disable button during spin
        startButton.style.pointerEvents = "none";
        
        deg = Math.floor(5000 + Math.random() * 5000);

        wheel.style.transition = "all 10s ease ";
        back.style.transition = "all 14s ease-out";
    
        // Rotate the wheel
        wheel.style.transform = `rotate(${deg}deg)`;
        // Apply the blur
        wheel.classList.add("blur");
        back.classList.add("rainbow");
    });

    wheel.addEventListener("transitionend", () => {
        // Remove blur
        wheel.classList.remove("blur");
        back.classList.remove("rainbow");
        // Enable button when spin is over
        startButton.style.pointerEvents = "auto";
        
        wheel.style.transition = "none";

        const actualDeg = deg % 360;
        // Set the real rotation instantly without animation
        wheel.style.transform = `rotate(${actualDeg}deg)`;

        var element = document.getElementById("result");

        if (actualDeg >= 0 && actualDeg < 90) {
        document.getElementById("result").textContent = "Yellow Animal";
        }
        if (actualDeg >= 90 && actualDeg < 180) {
            document.getElementById("result").textContent = "Red Animal";
        }
          if (actualDeg >= 180 && actualDeg < 270) {
            document.getElementById("result").textContent = "White Animal";
        }
          if (actualDeg >= 270 && actualDeg < 360) {
            document.getElementById("result").textContent = "Pink Animal";
        }
        console.log(actualDeg);
    });
})();