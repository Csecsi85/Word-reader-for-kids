const cardData = [
	{
		word: 'elefante',
		sound: 'assets/audio/elefante.m4a',
	},
	{
		word: 'libro',
		sound: 'assets/audio/libro.m4a',
	},
	{
		word: 'huevo',
		sound: 'assets/audio/huevo.m4a',
	},
	{
		word: 'casa',
		sound: 'assets/audio/casa.m4a',
	},
	{
		word: 'perro',
		sound: 'assets/audio/perro.m4a',
	},
	{
		word: 'pelota',
		sound: 'assets/audio/pelota.m4a',
	},
	{
		word: 'estrella',
		sound: 'assets/audio/estrella.m4a',
	},
	{
		word: 'camisa',
		sound: 'assets/audio/camisa.m4a',
	},
	{
		word: 'helado',
		sound: 'assets/audio/helado.m4a',
	},
	{
		word: 'tambor',
		sound: 'assets/audio/tambor.m4a',
	},
];
document.querySelector('#audio').addEventListener('click', cardPicker());

function cardPicker() {
	let randomNumber = Math.floor(Math.random() * cardData.length);
	let randomCard = [cardData[randomNumber].word, cardData[randomNumber].sound];
	document.querySelector('.card-container-text').innerHTML = randomCard[0];
	let audioElement = new Audio(randomCard[1]);
	audioElement.load();
	audioElement.play();
	document.getElementById('audio').audio.src = randomCard[1];
}
