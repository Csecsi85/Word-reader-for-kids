let playerCounter = 0,
	playerName;

/* Targeting fields on the player form */
const inputField = document.querySelector('#player-name-input'),
	createPlayerButton = document.querySelector('#create-player-button');

/* Event listeners for the form */
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
			`<li class="player-list-item"><p class="player-name" id="player${playerCounter}"></p><div class="score-content"><div class="counter-button minus" id="score-minus${playerCounter}"><i class="fa fa-minus-square"></i></div><span class="score-display" id="score${playerCounter}">0</span><div class="counter-button plus" id="score-plus${playerCounter}"><i class="fa fa-plus-square"></i></div></div></li>`
		);
	document.getElementById(`player${playerCounter}`).insertAdjacentText('afterbegin', name);
	playerCounter++;
};
