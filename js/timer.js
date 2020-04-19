/* Declare all global variables */
let isPaused = true,
	minutes = 0,
	seconds = 0,
	randomCard;

/* Target different parts of the page */
const playButton = document.querySelector('.pause'),
	audioButton = document.querySelector('#audioBtn'),
	reloadButton = document.querySelector('.btn-reload'),
	cardText = document.querySelector('.card-container-text'),
	timerDispaly = document.getElementById('timerValue'),
	activityImage = document.querySelector('.img');

/* Get user Input from the settings page */
const userInput = () => {
	userSettings = {
		time     : {
			/* Values : string with a number */
			minutes : parseInt(document.getElementById('minutes').value),
			seconds : parseInt(document.getElementById('seconds').value)
		},
		/* Values : es, en */
		language : document.querySelector('input[name="flags"]:checked').value,
		/* Values : True, False */
		showText : document.getElementById('show-text').checked
	};
	return userSettings;
};

/* Initialisation */
gameInit = (min = 3, sec = 0) => {
	playButton.innerHTML = '<i class="fa fa-play"></i>';
	playButton.style.display = 'block';
	activityImage.style.margin = '0';
	minutes = min;
	seconds = sec;
	isPaused = true;
	timeDisplay();
	changeActivityImg();
	audioButton.addEventListener('click', () => {
		new Audio(randomCard[1]).play();
	});
	cardPicker();
};

/* Alternate between button states Play/Pause */
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

/* Pick a random card from js/cards.js array */
cardPicker = () => {
	const randomNumber = Math.floor(Math.random() * cardData.length);
	randomCard = [ cardData[randomNumber].word, cardData[randomNumber].sound ];
	cardText.innerHTML = randomCard[0];
	document.getElementById('audio').src = randomCard[1];
};

/* Displays time and hides button when time is up */
timeDisplay = () => {
	if (seconds <= 0 && minutes == 0) {
		timerDispaly.innerHTML = 'Time is up!!!';
		playButton.style.display = 'none';
		activityImage.style.margin = '0 64px 0 0';
	} else if (seconds < 10) {
		timerDispaly.innerHTML = minutes + ':0' + seconds;
	} else if (seconds >= 10 || seconds <= 60) {
		timerDispaly.innerHTML = minutes + ':' + seconds;
	}
};

/* Countdown timer function */
timer = () => {
	let timerFunction = setInterval(function() {
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
};

/* Changing activity image */
changeActivityImg = () => {
	let activitySrc = [ 'assets/images/body.png', 'assets/images/draw.png', 'assets/images/speak.png' ];
	activityImage.src = activitySrc[Math.floor(Math.random() * activitySrc.length)];
};

/* Event Listeners to buttons on click */
playButton.addEventListener('click', pauseToggle);
reloadButton.addEventListener('click', () => {
	gameInit(userInput().time.minutes, userInput().time.seconds);
});

/* Start the webapp gameInit(minutes, seconds) */
/* todo make it user adjustable */
gameInit(userInput().time.minutes, userInput().time.seconds);
