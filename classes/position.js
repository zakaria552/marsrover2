class Position {
    constructor(x,y) {
        this.x = x
        this.y = y
    }

   addToPosition(increments) {
        this.x = this.x + increments[0]
        this.y = this.y + increments[1]
   }
   getNextPositionIncrements(orient) {
        // ["N", "E", "S", "W"] - "N" -> [x,y]=[0,1]
        const increments = [[0,1], [1,0], [0,-1], [-1,0]]
        const i = orient.getCardinalPoints().indexOf(orient.getDir())
        return increments[i]
   }
   getX() {
        return this.x
   }
   getY() {
        return this.y
   }
}

module.exports = Position