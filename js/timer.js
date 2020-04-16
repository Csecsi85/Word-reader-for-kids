/* Count time */
function timer(minutes = 5, seconds = 0) {
	let timerDispaly = document.getElementById('timerValue');

	let timerFunction = setInterval(function () {
		let displaySeconds = seconds % 60;

		/* Display time */
		if (seconds < 10) {
			timerDispaly.innerHTML = minutes + ':0' + displaySeconds;
		} else {
			timerDispaly.innerHTML = minutes + ':' + displaySeconds;
		}
		/* Reducing minutes and seconds */
		if (seconds == 0 && minutes == 0) {
			clearInterval(timerFunction);
			/* add a modal windows about the time is up or something */
		} else if (seconds == 0) {
			minutes--;
			seconds = 60;
		}
		seconds--;
	}, 1000);
}

timer();
