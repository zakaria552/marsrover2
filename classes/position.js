class Position {
     constructor(x,y) {
          this.xCoordinate = x
          this.yCoordinate = y
     }

     getRoverNextPosition(orient) {
          const [xChange, yChange] = orient.getDeltaXY()
          let x = this.xCoordinate + xChange
          let y = this.yCoordinate + yChange
          return new Position(x,y)
     }
     
     getCoordinates() {
          return [this.xCoordinate, this.yCoordinate]
     }
}

module.exports = Position