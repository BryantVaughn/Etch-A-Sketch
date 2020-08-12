const generateCells = (size) => {
	container.innerHTML = '';
	container.setAttribute(
		'style',
		`grid-template-columns: repeat(${size}, 1fr);`
	);
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			cell.addEventListener('mouseover', () => {
				cell.style.backgroundColor = 'slategray';
			});
			container.appendChild(cell);
		}
	}
};

const resetBoard = () => {
	let validInput = false;
	let size;

	while (!validInput) {
		validInput = true;

		try {
			size = parseInt(prompt('How many squares per side? (16-64)'));
			if (size < 16 || size > 64) {
				validInput = false;
				throw new Error('Number of squares must be in range of 16 to 64');
			}
		} catch (e) {
			console.log(e.message);
		}
	}
	generateCells(size);
};

const boardWidth = 960;
const boardHeight = 540;

const container = document.querySelector('.cell-container');

const clear = document.querySelector('#clear-btn');
clear.addEventListener('click', () => {
	resetBoard();
});

// generate initial board
generateCells(16);
