class Position {
     constructor(x,y) {
          this.x = x
          this.y = y
     }

     getRoverNextPosition(orient) {
          const [xChange, yChange] = orient.getPositionIncrements()
          let x = this.x + xChange
          let y = this.y + yChange
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