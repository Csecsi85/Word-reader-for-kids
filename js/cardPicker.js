let randomCard;
cardPicker();

function cardPicker() {
	const randomNumber = Math.floor(Math.random() * cardData.length);
	randomCard = [cardData[randomNumber].word, cardData[randomNumber].sound];
	document.querySelector('.card-container-text').innerHTML = randomCard[0];
	document.getElementById('audio').audio.src = randomCard[1];
	timeinit();
}
