const container = document.querySelector('.cell-container');
const resizeBtn = document.querySelector('#resize-btn');
const darkBtn = document.querySelector('#dark-btn');
const rgbBtn = document.querySelector('#rgb-btn');
const clearBtn = document.querySelector('#clear-btn');

// used for handling cancelled grid change
let lastSize = 48;

// generate initial board
generateCells(lastSize);

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
	darkHoverEffect();
}

function darkHoverEffect() {
	changeButtons('dark');

	const cells = getCells();
	cells.forEach((cell) => {
		cell.addEventListener('mouseover', () => {
			cell.style.backgroundColor = '#303542';
		});
	});
}

function randomHoverEffect() {
	changeButtons('random');

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

function changeButtons(str) {
	if (str === 'dark') {
		// add "pressed" styles to dark color button
		darkBtn.classList.add('active-color');
		darkBtn.classList.remove('btn');
		// remove "pressed" styles from random color button
		rgbBtn.classList.add('btn');
		rgbBtn.classList.remove('active-color');
	} else {
		// add "pressed" styles to random color button
		rgbBtn.classList.add('active-color');
		rgbBtn.classList.remove('btn');
		// remove "pressed" styles from dark color button
		darkBtn.classList.add('btn');
		darkBtn.classList.remove('active-color');
	}
}

function changeBoard() {
	let validInput = false;
	let size;

	while (!validInput) {
		validInput = true;

		try {
			size = parseInt(prompt('How many squares per side? (16-96)'));
			if (!size) {
				size = lastSize;
			} else if (size < 16 || size > 96) {
				validInput = false;
				throw new Error('Number of squares must be in range of 16 to 96');
			}
		} catch (e) {
			alert(e.message);
		}
	}

	lastSize = size;
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
darkBtn.addEventListener('click', darkHoverEffect);
rgbBtn.addEventListener('click', randomHoverEffect);
clearBtn.addEventListener('click', clearBoard);
