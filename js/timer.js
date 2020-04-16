let isPaused = true,
	minutes = 1,
	seconds = 3,
	playButton = document.querySelector('.play-button'),
	pauseToggle = () => {
		if (isPaused === false) {
			isPaused = true;
			playButton.innerHTML = 'Play';
		} else {
			isPaused = false;
			playButton.innerHTML = 'Pause';
			timer();
		}
	};
let timerDispaly = document.getElementById('timerValue');
document.querySelector('.pause').addEventListener('click', pauseToggle);

function timeDisplay() {
	if (seconds <= 0 && minutes == 0) {
		timerDispaly.innerHTML = 'Time is up!!!';
		document.querySelector('.pause').style.display = 'none';
	} else if (seconds < 10) {
		timerDispaly.innerHTML = minutes + ':0' + seconds;
	} else if (seconds >= 10 || seconds <= 60) {
		timerDispaly.innerHTML = minutes + ':' + seconds;
	}
}

timeDisplay();

function timer() {
	let timerFunction = setInterval(function () {
		/* Reducing minutes and seconds */
		if (seconds <= 0 && minutes == 0) {
			clearInterval(timerFunction);
		} else if (isPaused) {
			clearInterval(timerFunction);
		} else if (seconds <= 0) {
			minutes--;
			seconds = 59;
			timeDisplay();
		} else {
			seconds--;
			timeDisplay();
		}
	}, 1000);
}
