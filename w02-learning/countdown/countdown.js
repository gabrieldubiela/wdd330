const countdown = document.getElementById('countdown');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const timeInput = document.getElementById('timeInput');
let time = 10000;
const interval = 1000;
let isPaused = false;
let timer = time
let timeout = null;
let current = timer;
let timeDisplay = null;

function startCountdown() {
    countdown.textContent = current/interval;
        
    function endCountdown() {
        alert("Time's up!");
    }

    timeDisplay = setInterval(() => {
        countdown.textContent = ( current / interval ) - 1;
        current -= interval;
        timer -= interval;
        
    }, interval);
        
    timeout = setTimeout(() => {
        clearInterval(timeDisplay);
        endCountdown();
        startButton.disabled = false;
    }, timer);
}

document.addEventListener('DOMContentLoaded', function() {
    startButton.addEventListener('click', function() {
        startButton.disabled = true;
        const input = parseInt(timeInput.value);
        if (isNaN(input) || input <= 0) {
            time = 10000;
        }
        else {
            time = input * 1000;
        }
        current = time;
        timer = time;
        pauseButton.textContent = 'Pause';
        isPaused = false;
        startCountdown();
    });

    pauseButton.addEventListener('click', function() {
        if (!isPaused) {
            clearInterval(timeDisplay);
            clearTimeout(timeout);
            isPaused = true;
            pauseButton.textContent = 'Resume';
        } else {
            startCountdown();
            isPaused = false;
            pauseButton.textContent = 'Pause';
        }
    });
});
