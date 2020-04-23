//////////////////////////////////
/* Declare all global variables */
//////////////////////////////////
let playerCounter = 0,
	playerName;

const inputField = document.querySelector('#player-name-input'),
	createPlayerButton = document.querySelector('#create-player-button'),
	startGameButton = document.querySelector('#start-game-button'),
	resetGameButton = document.querySelector('#reset-game-button');

//////////////////////////////////
/* Event listeners for the form */
//////////////////////////////////

createPlayerButton.addEventListener('click', () => {
	if (inputField.value.length > 0) {
		if (inputField.value.length > 14) {
			inputField.value = inputField.value.substring(0, 14);
		}
		if (playerCounter < 7) {
			playerName = inputField.value;
			createPlayer(playerName);
			document.forms['players-form'].reset();
		} else if (playerCounter == 7) {
			playerName = inputField.value;
			createPlayer(playerName);
			document.forms['players-form'].reset();
			inputField.style.display = 'none';
			createPlayerButton.style.display = 'none';
		}
	}
});

inputField.addEventListener('keyup', function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		if (inputField.value.length > 0) {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the button element with a click
			createPlayerButton.click();
		}
	}
});
///////////////////////////////////////
/* Player fields & buttons functions */
///////////////////////////////////////

/* Automatically creates players on userinput */
createPlayer = (name) => {
	document
		.getElementById('players')
		.insertAdjacentHTML(
			'beforeend',
			`<li class="player-list-item"><p class="player-name" id="player${playerCounter}"></p><div class="score-content"><div class="counter-button minus" id="score-minus${playerCounter}"><i class="fa fa-minus-square"></i></div><span class="score-display" id="score${playerCounter}">0</span><div class="counter-button plus" id="score-plus${playerCounter}"><i class="fa fa-plus-square"></i></div></div></li>`
		);
	document.getElementById(`player${playerCounter}`).insertAdjacentText('afterbegin', name);
	playerCounter++;
};

/* After player creation and pressing start register all score buttons for players */
registerScoreButtons = () => {
	if (playerCounter) {
		for (let i = 0; i < playerCounter; i++) {
			let minusButton = document.getElementById(`score-minus${i}`);
			let plusButton = document.getElementById(`score-plus${i}`);
			let scoreDisplay = document.getElementById(`score${i}`);

			minusButton.addEventListener('click', () => {
				scoreDisplay.textContent -= 1;
			});
			plusButton.addEventListener('click', () => {
				scoreDisplay.textContent -= -1;
			});
		}
		document.querySelector('.card-container').style.display = 'block';
		disablePlayerInput();
	}
};

/* Disables all before game buttons */
disablePlayerInput = () => {
	startGameButton.style.display = 'none';
	inputField.style.display = 'none';
	createPlayerButton.style.display = 'none';
};

startGameButton.addEventListener('click', registerScoreButtons);
/* Listener for audio button when game starts
 to avoid multiple listeners for the same button during creation */
audioButton.addEventListener('click', () => {
	new Audio(randomCard[1]).play();
});

/* Reset button (Window reload) */
resetGameButton.addEventListener('click', () => {
	window.location.reload(false);
});
