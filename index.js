const generateCells = (size) => {
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			cell.textContent = i * 16 + (j + 1);
			container.appendChild(cell);
		}
	}
};

const container = document.querySelector('.cell-container');
generateCells(16);
