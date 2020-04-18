function changeActivity() {
	const activitySrc = ['assets/images/body.png', 'assets/images/draw.png', 'assets/images/speak.png'];
	document.querySelector('.img').src = activitySrc[Math.floor(Math.random() * activitySrc.length)];
};


document.querySelector('.btn-reload').addEventListener('click', function () {
	playButton.innerHTML = '<i class="fa fa-play"></i>';
	minutes = 3;
	seconds = 0;
	isPaused = true;
	timeDisplay();
	changeActivity()
	document.querySelector('.pause').style.visibility = 'visible';
	cardPicker();
});
