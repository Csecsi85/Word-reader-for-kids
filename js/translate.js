//////////////////////////////////////////////////////////////////////////////////////
/* Storing and selecting language received from userInput.language value="es or "en */
//////////////////////////////////////////////////////////////////////////////////////

languageHandler = (lang) => {
	let language = {};
	/* String database object */
	const languageStrings = {
		es : {
			title          : 'Activity para niños',
			players        : 'Jugadores',
			score          : 'Puntos',
			nameInputLabel : 'Nombre',
			addButton      : 'Añadir',
			settings       : 'Ajustes',
			timer          : 'Temporizador',
			minutes        : 'Minutos:',
			seconds        : 'Segundos:',
			language       : 'Idioma',
			showText       : 'Mostrar texto?',
			showTextDesc   : 'Qieres ver el texto <br> en la cajilla?',
			save           : 'Guardar'
		},
		en : {
			title          : 'Activity for kids',
			players        : 'Players',
			score          : 'Points',
			nameInputLabel : 'Name',
			addButton      : 'Add',
			settings       : 'Settings',
			timer          : 'Timer',
			minutes        : 'Minutes:',
			seconds        : 'Seconds:',
			language       : 'Language',
			showText       : 'Show text?',
			showTextDesc   : 'Do you want to show <br> text on the cards?',
			save           : 'Save'
		}
	};
	/* Selects the language object to return */
	switch (lang) {
		case 'es':
			language = languageStrings.es;
			break;
		case 'en':
			language = languageStrings.en;
			break;
		default:
			language = languageStrings.es;
	}
	return language;
};

////////////////////////////////////////////////////
/* Translating text received from languageHandler */
////////////////////////////////////////////////////

translate = (lang) => {
	document.title = lang.title;
	document.querySelector('.modal-box-header').textContent = lang.settings;
	document.querySelector('#players-title').textContent = lang.players;
	document.querySelector('#score-title').textContent = lang.score;
	document.querySelector('#player-name-input').placeholder = lang.nameInputLabel;
	document.querySelector('#create-player-button').textContent = lang.addButton;
	document.querySelector('.set-timer').textContent = lang.timer;
	document.querySelector('.sliders-time-minutes').textContent = lang.minutes;
	document.querySelector('.sliders-time-seconds').textContent = lang.seconds;
	document.querySelector('.flags-title').textContent = lang.language;
	document.querySelector('.card-text-title').textContent = lang.showText;
	document.querySelector('.card-text-description').innerHTML = lang.showTextDesc;
	document.getElementById('apply-button').textContent = lang.save;
};
