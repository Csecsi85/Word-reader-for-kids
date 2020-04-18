let modalButton = document.querySelector('.modal-button');

modalButton.addEventListener('click', () => {
	modalToggle();
});

function modalToggle() {
	document.querySelector('.modal-container').classList.toggle('modal');
}
