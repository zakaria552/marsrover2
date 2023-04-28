class Position {
    constructor(x,y) {
        this.x = x
        this.y = y
    }

   getNextPosition(xyChanges) {
        const x = xyChanges[0] + this.x
        const y = xyChanges[1] + this.y
        return new Position(x,y)
   }
   getX() {
        return this.x
   }
   getY() {
        return this.y
   }
}

module.exports = Position