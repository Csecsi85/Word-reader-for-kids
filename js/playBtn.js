document.querySelector('#audioBtn').addEventListener('click', play);
function play() {
	const audioElement = new Audio(randomCard[1]);
	audioElement.play();
}
