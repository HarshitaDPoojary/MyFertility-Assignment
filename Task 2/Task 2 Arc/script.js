document.addEventListener("DOMContentLoaded", () => {
    const progressCircle = document.getElementById("progress-circle");
    const progressValue = document.getElementById("progress-value");

    // Extract the number from the progress value text
    const value = parseInt(progressValue.textContent);

    // Validate and update progress bar
    if (!isNaN(value) && value >= 0 && value <= 100) {
        const angle = (value / 100) * 360; // Convert percentage to degrees
        progressCircle.style.background = `conic-gradient(
            #009688 ${angle}deg,
            #ddd ${angle}deg
        )`;
    } else {
        console.error("Invalid progress value. Please provide a number between 0 and 100.");
    }
});
