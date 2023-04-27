const Orientation = require("./orientation")
const Position = require("./position.js")

class Rover {
    constructor(x, y, dir, surface) {
        this.position = new Position(x, y)
        this.orientation = new Orientation(dir)
        this.surface = surface
    }
    // changes the current orientation given a 
    changeOrient(turn) {
        this.orientation.rotate(turn)
    }
    // checks where the current direction is and moves accordingly
    move()  {
        const moveIncrements = this.position.getNextPositionIncrements(this.orientation)
        this.surface.isMovementPossible(this.position, moveIncrements) ? this.position.addToPosition(moveIncrements): ""
    }
    // sends signal to the rover and the rover intepr
    sendSignal(str) {
        str.split("").forEach((c) => {
            if ("LR".includes(c)) {
                this.changeOrient(c)
            } else if(c == "M") {
                this.move()
            } else {
                console.log("Signal not interpretable")
            }
        })
    }
    pingLocation() {
        return `(${this.position.getX()},${this.position.getY()}) facing ${this.orientation.getDir()}`
    }
}


module.exports = Rover