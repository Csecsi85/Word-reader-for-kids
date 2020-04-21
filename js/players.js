let playerCounter = 1;
let playerName;

const createPlayerButton = document.querySelector('#create-player-button');
const inputField = document.querySelector('#player-name-input');

createPlayerButton.addEventListener('click', () => {
	if (inputField.value.length > 0) {
		playerName = document.getElementById('player-name-input').value;
		createPlayer(playerName);
		document.forms['players-form'].reset();
	}
});

/* inputField.addEventListener('keyup', function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		if (inputField.value.length > 0) {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the button element with a click
			createPlayerButton.click();
		}
	}
}); */

createPlayer = (name) => {
	document
		.getElementById('players')
		.insertAdjacentHTML(
			'beforeend',
			`<li class="player-list-item"><p class="playerName" id="player${playerCounter}"><span class="score-text"> Score: </span><span id="score${playerCounter}">0</span></p></li>`
		);
	document.getElementById(`player${playerCounter}`).insertAdjacentText('afterbegin', name);
	playerCounter++;
};
