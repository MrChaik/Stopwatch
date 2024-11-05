let hours, minutes, seconds, milliseconds = 0;
let StartTime = 0;
let StopTime = 0;
let isRunning = false;
let ElapsedTime = 0;
const timer = document.getElementById('timer');
document.getElementById("Stopwatch").style.color = "red";

function Start() {
    StartTime = Date.now() - ElapsedTime;
    isRunning = true;
    timeInterval = setInterval(Update, 10); // Updated to 100ms for better time resolution
}

function Stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timeInterval);
    }
}

function Reset() {
    Stop(); // Corrected the function name
    ElapsedTime = 0;
    timer.innerHTML = `<h1>00:00:00:000</h1>`;
}

function Update() {
    if (isRunning) {
        ElapsedTime = Date.now() - StartTime;
        const time = new Date(ElapsedTime);
        hours = String(time.getUTCHours()).padStart(2, '0');
        minutes = String(time.getUTCMinutes()).padStart(2, '0');
        seconds = String(time.getUTCSeconds()).padStart(2, '0');
        milliseconds = String(time.getUTCMilliseconds()).padStart(3, '0');
        timer.innerHTML = `<h1>${hours}:${minutes}:${seconds}:${milliseconds}</h1>`;
    }
}
