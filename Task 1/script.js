document.addEventListener("DOMContentLoaded", () => {
    const progressCircles = document.querySelectorAll(".progress-circle");
  
    progressCircles.forEach((circle) => {
      const value = parseInt(circle.getAttribute("data-progress"));
      const color = circle.getAttribute("data-color") || "#009688";
  
      if (!isNaN(value) && value >= 0 && value <= 100) {
        const angle = (value / 100) * 360; // Convert percentage to degrees
        circle.style.background = `conic-gradient(
          ${color} ${angle}deg,
          #ddd ${angle}deg
        )`;
      } else {
        console.error("Invalid progress value. Please provide a number between 0 and 100.");
      }
    });
  });
  