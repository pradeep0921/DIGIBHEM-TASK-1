let startTime;
let running = false;
let laps = [];

function startStop() {
  if (!running) {
    start();
    document.getElementById('startStopButton').textContent = 'Stop';
  } else {
    stop();
    document.getElementById('startStopButton').textContent = 'Start';
  }
}

function start() {
  startTime = Date.now() - laps.reduce((acc, lap) => acc + lap, 0); // Adjust start time for already elapsed time
  running = true;
  updateDisplay();
  timer = setInterval(updateDisplay, 10);
}

function stop() {
  clearInterval(timer);
  running = false;
}

function reset() {
  stop();
  laps = [];
  document.getElementById('startStopButton').textContent = 'Start';
  updateDisplay();
}

function lap() {
  if (running) {
    const elapsedTime = Date.now() - startTime;
    laps.push(elapsedTime);
    updateLaps();
  }
}

function updateDisplay() {
  const elapsedTime = running ? Date.now() - startTime : 0;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById('display').textContent = formattedTime;
}

function updateLaps() {
  const lapsContainer = document.getElementById('laps');
  lapsContainer.innerHTML = '';
  laps.forEach((lap, index) => {
    const lapTime = formatTime(lap);
    const lapElement = document.createElement('div');
    lapElement.textContent = `Lap ${index + 1}: ${lapTime}`;
    lapsContainer.appendChild(lapElement);
  });
}

function formatTime(time) {
  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((time % 1000) / 10);
  return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
  return number.toString().padStart(2, '0');
}
