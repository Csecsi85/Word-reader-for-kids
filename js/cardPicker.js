document.querySelector('#audioBtn').addEventListener('click', cardPicker);

function cardPicker() {
	let randomNumber = Math.floor(Math.random() * cardData.length);
	let randomCard = [cardData[randomNumber].word, cardData[randomNumber].sound];
	document.querySelector('.card-container-text').innerHTML = randomCard[0];
	let audioElement = new Audio(randomCard[1]);
	audioElement.load();
	audioElement.play();
	document.getElementById('audio').audio.src = randomCard[1];
}

cardPicker();
