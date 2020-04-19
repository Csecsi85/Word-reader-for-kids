/* Settings button on the right top of the screen */
let modalButton = document.querySelector('.modal-button');

modalButton.addEventListener('click', () => {
	modalToggle();
});

function modalToggle() {
	document.querySelector('.modal-container').classList.toggle('modal');
}
