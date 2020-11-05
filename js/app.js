//////////////////////////////////
/* Declare all global variables */
//////////////////////////////////

let isPaused = true,
	minutes = 0,
	seconds = 0,
	randomCard;

////////////////////////////////////////
/* Target different parts of the page */
////////////////////////////////////////

const playButton = document.querySelector('.pause'),
	audioButton = document.querySelector('#audioBtn'),
	reloadButton = document.querySelector('.btn-reload'),
	cardText = document.querySelector('.card-container-text'),
	timerDispaly = document.getElementById('timerValue'),
	activityImage = document.querySelector('.img'),
	modalButton = document.querySelector('.modal-button'),
	modalBox = document.getElementById('modal'),
	applyButton = document.getElementById('apply-button');

////////////////////
/* Initialisation */
////////////////////

gameInit = (min = 3, sec = 0) => {
	/* If there are cards in the cardTracker array */
	if (cardTracker.length > 0) {
		playButton.innerHTML = '<i class="fa fa-play"></i>';
		playButton.style.display = 'block';
		activityImage.style.margin = '0';
		minutes = min;
		seconds = sec;
		isPaused = true;
		timeDisplay();
		changeActivityImg();
		cardPicker();
		/* If there are no cards left in the cardTracker array */
	} else {
		cardTracker = cardDataLanguage();
		gameInit(userInput().time.minutes, userInput().time.seconds);
	}
	translate(languageHandler(userInput().language));
};

////////////////////////
/* All card functions */
////////////////////////

/* Alternate between button states Play/Pause */
pauseToggle = () => {
	if (!isPaused) {
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
	const randomNumber = Math.floor(Math.random() * cardTracker.length);
	randomCard = [ cardTracker[randomNumber].word, cardTracker[randomNumber].sound ];
	if (userInput().showText) {
		cardText.innerHTML = randomCard[0];
		// if (randomCard[0].length > 12 && window.screen.width > '1023px') {
		// 	cardText.style.fontSize = '5rem';
		// } else {
		// 	cardText.style.fontSize = '6rem';
		// }
	} else {
		cardText.innerHTML = '';
	}
	document.getElementById('audio').src = randomCard[1];
	cardTracker.splice(randomNumber, 1);
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

/////////////////////
/* Modal functions */
/////////////////////

/* Toggles the modal icon */
modalIconToggler = () => {
	if (document.querySelector('.modal-button').innerHTML == '<i class="fa fa-cog"></i>') {
		document.querySelector('.modal-button').innerHTML = '<i class="fa fa-times"></i>';
		document.querySelector('.modal-button').classList.toggle('red')
	} else {
		document.querySelector('.modal-button').innerHTML = '<i class="fa fa-cog"></i>';
		document.querySelector('.modal-button').classList.toggle('red');
	}
};

/* Closes modal when user clicks anywhere outside of the modal */
window.onclick = function(event) {
	if (event.target == modalBox) {
		document.querySelector('.modal-container').classList.toggle('modal');
		modalIconToggler();
	}
};
/* Toggles modal when ESC key is pressed*/
window.onkeyup = function(event) {
	if (event.keyCode == 27) {
		document.querySelector('.modal-container').classList.toggle('modal');
		modalIconToggler();
	}
};

/* Get user Input from the settings modal */
const userInput = () => {
	userSettings = {
		time     : {
			/* Values : number */
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

/////////////////////////////////////////
/* Event Listeners to buttons on click */
/////////////////////////////////////////

/* Toggles between cog wheel and X when settings button pressed */
modalButton.addEventListener('click', () => {
	modalToggle();
	modalIconToggler();
});
applyButton.addEventListener('click', () => {
	modalToggle();
	modalIconToggler();
});
playButton.addEventListener('click', pauseToggle);
reloadButton.addEventListener('click', () => {
	gameInit(userInput().time.minutes, userInput().time.seconds);
});
/* Toggles the modal container on cog button click */
function modalToggle() {
	document.querySelector('.modal-container').classList.toggle('modal');
}

/////////////////////////////////////////////////
/* Start the webapp gameInit(minutes, seconds) */
/////////////////////////////////////////////////
gameInit(userInput().time.minutes, userInput().time.seconds);
document.querySelector('.modal-container').classList.toggle('modal');
modalIconToggler();
