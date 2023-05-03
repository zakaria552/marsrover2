class Position {
     constructor(x,y) {
          this.xCoordinate = x
          this.yCoordinate = y
     }

     getRoverNextPosition(orient) {
          const [xChange, yChange] = orient.getCardinalPoints()[orient.getCurrentDirection()].move
          let x = this.xCoordinate + xChange
          let y = this.yCoordinate + yChange
          return new Position(x,y)
     }
     getXCoordinate() {
          return this.xCoordinate
     }
     getYCoordinate() {
          return this.yCoordinate
     }
}

module.exports = Position