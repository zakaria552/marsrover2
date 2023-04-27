class Position {
    constructor(x,y) {
        this.x = x
        this.y = y
    }

   getNextPosition(orient) {
        // ["N", "E", "S", "W"] - "N" -> [x,y]=[0,1]
        const increments = [[0,1], [1,0], [0,-1], [-1,0]]
        const i = orient.getCardinalPoints().indexOf(orient.getDir())
        const x = increments[i][0] + this.x
        const y = increments[i][1] + this.y
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