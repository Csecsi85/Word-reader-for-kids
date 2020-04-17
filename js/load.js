(function () {
	const activitySrc = ['assets/images/body.png', 'assets/images/draw.png', 'assets/images/speak.png'];
	document.querySelector('.img').src = activitySrc[Math.floor(Math.random() * activitySrc.length)];
})();
