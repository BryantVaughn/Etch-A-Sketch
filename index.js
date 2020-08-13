const container = document.querySelector('.cell-container');
const gridBtn = document.querySelector('#grid-btn');
const resizeBtn = document.querySelector('#resize-btn');
const rgbBtn = document.querySelector('#rgb-btn');
const clearBtn = document.querySelector('#clear-btn');

// generate initial board
generateCells(48);

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
	clearCells();
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

function randomHoverEffect() {
	const cells = getCells();
	cells.forEach((cell) => {
		cell.addEventListener('mouseover', () => {
			cell.style.backgroundColor = generateRandomColor();
		});
	});
}

function getCells() {
	return document.querySelectorAll('.cell');
}

function generateRandomColor() {
	const colorValues = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += colorValues[Math.floor(Math.random() * colorValues.length)];
	}
	return color;
}

function changeBoard() {
	let validInput = false;
	let size;

	while (!validInput) {
		validInput = true;

		try {
			size = parseInt(prompt('How many squares per side? (16-96)'));
			if (size < 16 || size > 96) {
				validInput = false;
				throw new Error('Number of squares must be in range of 16 to 96');
			}
		} catch (e) {
			alert(e.message);
		}
	}
	generateCells(size);
}

function clearBoard() {
	container.classList.toggle('clear');

	setTimeout(() => {
		clearCells();
		container.classList.toggle('clear');
	}, 1000);
}

function clearCells() {
	const cells = getCells();
	cells.forEach((cell) => {
		cell.style.backgroundColor = '#e8e8eb';
	});
}

resizeBtn.addEventListener('click', changeBoard);
rgbBtn.addEventListener('click', randomHoverEffect);
clearBtn.addEventListener('click', clearBoard);
