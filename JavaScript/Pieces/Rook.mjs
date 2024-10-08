import Piece from './Piece.mjs';

var Rook = function(color, currentPosition) {
	this.color = color;
	this.currentPosition = currentPosition;
};

Rook.prototype = new Piece();
Rook.prototype.setIcon = function() {
	if (this.color === 'w') {
		this.icon = '&#9814';
	} else if (this.color === 'b') {
		this.icon = '&#9820';
	}
};
Rook.prototype.getMovePaths = function() {
	this.movePaths = [];
	var column, row;
	// move right
	let moveRight = [];
	this.movePaths.push(moveRight);
	for(column = this.currentPosition.column + 1; column <= 7; column++) {
		moveRight.push({row: this.currentPosition.row, column: column});
	}

	// move left
	let moveLeft = [];
	this.movePaths.push(moveLeft);
	for(column = this.currentPosition.column - 1; column >= 0 ; column--) {
		moveLeft.push({row: this.currentPosition.row, column: column});
	}

	// move up
	let moveUp = [];
	this.movePaths.push(moveUp);
	for(row = this.currentPosition.row - 1; row >= 0 ; row--) {
		moveUp.push({row: row, column: this.currentPosition.column});
	}

	// move down
	let moveDown = [];
	this.movePaths.push(moveDown);
	for(row = this.currentPosition.row + 1; row <= 7; row++) {
		moveDown.push({row: row, column: this.currentPosition.column});
	}
	return this.movePaths;

}

export default Rook;