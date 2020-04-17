let isPaused = true,
	minutes = 0,
	seconds = 5,
	playButton = document.querySelector('.pause'),
	pauseToggle = () => {
		if (isPaused === false) {
			isPaused = true;
			playButton.innerHTML = '<i class="fa fa-play"></i>';
			timerDispaly.innerHTML = 'PAUSED';
		} else {
			isPaused = false;
			playButton.innerHTML = '<i class="fa fa-pause"></i>';
			timer();
		}
	};

let timerDispaly = document.getElementById('timerValue');
document.querySelector('.pause').addEventListener('click', pauseToggle);

function timeDisplay() {
	if (seconds <= 0 && minutes == 0) {
		timerDispaly.innerHTML = 'Time is up!!!';
		document.querySelector('.pause').style.visibility = 'hidden';
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
