// Piece.js
function Piece() {
    this.movePaths = [];
}

Piece.prototype.setCurrentPosition = function(currentPosition) {
    this.currentPosition = currentPosition;
};

export default Piece;
