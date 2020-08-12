const generateCells = (size) => {
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			container.appendChild(cell);
		}
	}
};

const container = document.querySelector('.cell-container');
generateCells(16);

// get cells and add event listener
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
	cell.addEventListener('mouseover', () => {
		cell.classList.add('visited');
	});
});
