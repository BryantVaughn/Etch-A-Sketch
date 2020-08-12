const container = document.querySelector('.cell-container');
const resizeBtn = document.querySelector('#resize-btn');
const rgbBtn = document.querySelector('#rgb-btn');
const clearBtn = document.querySelector('#clear-btn');

// generate initial board
generateCells(16);

function generateCells(size) {
	container.innerHTML = '';
	container.style.setProperty('--grid-columns', size);
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			container.appendChild(cell);
		}
	}
	blackHoverEffect();
}

function blackHoverEffect() {
	const cells = getCells();
	cells.forEach((cell) => {
		cell.addEventListener('mouseover', () => {
			cell.style.backgroundColor = 'black';
		});
	});
}

function getCells() {
	return document.querySelectorAll('.cell');
}

function changeBoard() {
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
}

function clearBoard() {
	const cells = getCells();
	cells.forEach((cell) => {
		cell.style.backgroundColor = 'white';
	});
}

resizeBtn.addEventListener('click', changeBoard);
clearBtn.addEventListener('click', clearBoard);
