console.log("time to start the timer!");

const timer = document.querySelector('p');
const startButton = document.querySelectorAll('button')[0];
const stopButton = document.querySelectorAll('button')[1];
const resetButton = document.querySelectorAll('button')[2];

var interval, offset, minutes = 0, seconds = 0, clock = 0;

function setTime() {
    minutes = Math.floor(clock / 1000 / 60);
    seconds = Math.floor(clock / 1000 - minutes * 60);
    if (seconds < 10) {
        timer.innerHTML = minutes + ":0" + seconds;
    } else {
        timer.innerHTML = minutes + ":" + seconds;
    }
}

startButton.addEventListener('click', () => {
    if (!interval) {
        offset = Date.now();
        interval = setInterval(() => {
            var now = Date.now();
            var delta = now - offset;
            offset = now;
            clock += delta;
            setTime();
        }, 15);
    }
});

stopButton.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
});

resetButton.addEventListener('click', () => {
    clock = 0;
    setTime();
});