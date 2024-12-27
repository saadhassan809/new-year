// Countdown timer
const countdownElement = document.getElementById('countdown');

// Set the target date for New Year 2025
const targetDate = new Date("January 1, 2025 00:00:00").getTime();

// Update the countdown every second
const interval = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown reaches zero, display "Happy New Year"
    if (timeLeft <= 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "Happy New Year 2025!";
    }
}, 1000);
