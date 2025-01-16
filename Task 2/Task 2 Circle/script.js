document.addEventListener("DOMContentLoaded", () => {
    const progressCircle = document.getElementById("progress-circle");
    const progressValue = document.getElementById("progress-value");

    // Get the value from the span element and convert it to a number
    const value = parseInt(progressValue.textContent);

    // Check if the value is a valid integer between 0 and 100
    if (!isNaN(value) && value >= 0 && value <= 100) {
        // Calculate the angle for the conic gradient
        const angle = (value / 100) * 360;
        // Update the background style of the progress circle
        progressCircle.style.background = `conic-gradient(
            #4caf50 ${angle}deg,
            #ddd ${angle}deg
        )`;
    } else {
        console.error("Invalid progress value. Please provide an integer between 0 and 100.");
    }
});