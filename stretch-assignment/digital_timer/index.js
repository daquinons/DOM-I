let counter = 0;
function everyTenMs() {
  counter += 1;
  updateUI(counter);
  if (counter === 1000) {
    console.log("10 seconds");
    stopTimer();
  }
}

function counterToSeconds(counter) {
  return Math.floor(counter / 100);
}

function startTimer() {
  timerToZero();
  interval = window.setInterval(everyTenMs, 10);
  let startButton = document.getElementById('startButton');
  startButton.disabled = true;
}

function timerToZero() {
  let digits = document.querySelectorAll('.digit');
  digits.forEach(element =>  { 
    element.textContent = '0';
    element.style.color = 'black';
});
  document.getElementById('colon').textContent = ':';

}

function stopTimer() {
  clearInterval(interval);
  let digits = document.querySelectorAll('.digit');
  digits.forEach(element => element.style.color = 'red');
  let startButton = document.getElementById('startButton');
  startButton.disabled = false;
  counter = 0;
}

function resetTimer() {
  stopTimer();
  timerToZero();
}

function updateUI(counter) {
  let counterString = counter.toString();
  let seconds = counterToSeconds(counter);
  if (seconds < 10) {
    document.getElementById('secondTens').textContent = 0;
    document.getElementById('secondOnes').textContent = seconds;
  } else if (seconds === 10) {
    document.getElementById('secondTens').textContent = 1;
    document.getElementById('secondOnes').textContent = 0;
  }

  document.getElementById('msHundreds').textContent = counterString.charAt(counterString.length - 2);
  document.getElementById('msTens').textContent = counter % 10;
  
}

let interval;
timerToZero();