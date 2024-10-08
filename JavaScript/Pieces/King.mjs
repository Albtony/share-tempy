import Piece from './Piece.mjs';

var King = function(color, currentPosition) {
	this.color = color;
	this.currentPosition = currentPosition;
};
King.prototype = new Piece();
King.prototype.setIcon = function() {
	if (this.color === 'w') {
		this.icon = '&#9812';
	} else if (this.color === 'b') {
		this.icon = '&#9818';
	}
};
King.prototype.getMovePaths = function() {
	this.movePaths = [];
	// Move right
	let moveRight = [];
	this.movePaths.push(moveRight);
	if (this.currentPosition.column != 7) moveRight.push({row: this.currentPosition.row, column: this.currentPosition.column + 1}) 
	// Move up right
	let moveUpRight = [];
	this.movePaths.push(moveUpRight);
	if (this.currentPosition.column != 7 && this.currentPosition.row != 0) moveUpRight.push({row: this.currentPosition.row - 1, column: this.currentPosition.column + 1}) 
	// Move up
	let moveUp = [];
	this.movePaths.push(moveUp);
	if (this.currentPosition.row != 0) moveUp.push({row: this.currentPosition.row - 1, column: this.currentPosition.column}) 
	// Move up left
	let moveUpLeft = [];
	this.movePaths.push(moveUpLeft);
	if (this.currentPosition.row != 0 && this.currentPosition.column != 0) moveUpLeft.push({row: this.currentPosition.row - 1, column: this.currentPosition.column - 1}) 
	// Move left
	let moveLeft = [];
	this.movePaths.push(moveLeft);
	if (this.currentPosition.row != 0) moveLeft.push({row: this.currentPosition.row, column: this.currentPosition.column - 1}) 
	// Move down left
	let moveDownLeft = [];
	this.movePaths.push(moveDownLeft);
	if (this.currentPosition.row != 7 && this.currentPosition.column != 0) moveDownLeft.push({row: this.currentPosition.row + 1, column: this.currentPosition.column - 1}) 
	// Move down
	let moveDown = [];
	this.movePaths.push(moveDown);
	if (this.currentPosition.row != 7) moveDown.push({row: this.currentPosition.row + 1, column: this.currentPosition.column});
	// Move down right
	let moveDownRight = [];
	this.movePaths.push(moveDownRight);
	if (this.currentPosition.row != 7 && this.currentPosition.column != 7) moveDownRight.push({row: this.currentPosition.row + 1, column: this.currentPosition.column + 1});

	return this.movePaths;

}

export default King;