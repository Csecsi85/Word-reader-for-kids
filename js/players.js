let playerCounter = 1,
	playerName;

/* Targeting fields on the player form */
const inputField = document.querySelector('#player-name-input'),
	createPlayerButton = document.querySelector('#create-player-button');

/* Event listeners for the form */
createPlayerButton.addEventListener('click', () => {
	if (inputField.value.length > 0) {
		if (playerCounter < 8) {
			playerName = inputField.value;
			createPlayer(playerName);
			document.forms['players-form'].reset();
		} else if (playerCounter == 8) {
			playerName = inputField.value;
			createPlayer(playerName);
			document.forms['players-form'].reset();
			inputField.disabled = true;
			inputField.placeholder = 'Player limit reached';
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

/* Create player function */
createPlayer = (name) => {
	document
		.getElementById('players')
		.insertAdjacentHTML(
			'beforeend',
			`<li class="player-list-item"><p class="player-name" id="player${playerCounter}"></p> <span class="score-display" id="score${playerCounter}">0</span></li>`
		);
	document.getElementById(`player${playerCounter}`).insertAdjacentText('afterbegin', name);
	playerCounter++;
};
