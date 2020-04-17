(function () {
	const activitySrc = ['assets/images/body.png', 'assets/images/draw.png', 'assets/images/speak.png'];
	document.querySelector('.img').src = activitySrc[Math.floor(Math.random() * activitySrc.length)];
})();

document.querySelector('.btn-reload').addEventListener('click', function () {
	playButton.innerHTML = '<i class="fa fa-play"></i>';
	minutes = 0;
	seconds = 5;
	isPaused = true;
	timeDisplay();
	document.querySelector('.pause').style.visibility = 'visible';
	cardPicker();
});
