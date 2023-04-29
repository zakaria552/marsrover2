const Orientation = require("./orientation")
const Position = require("./position.js")

class Rover {
    constructor(x, y, direction, surface) {
        this.position = new Position(x, y)
        this.orientation = new Orientation(direction)
        this.surface = surface
    }
    turn(turn) {
        this.orientation.changeOrientationByTurn(turn)
    }
    move()  {
        if(this.surface.isMovementPossible(this)) {
            this.position = this.position.getRoverNextPosition(this.orientation)
            console.log( "moving ", this.orientation.getTurn())
        } else {
            console.log("can not move")
        }
    }
    sendSignal(str) {
        str.split("").forEach((c) => {
            if ("LR".includes(c)) {
                this.turn(c)
            } else if(c == "M") {
                this.move()
            } else {
                console.log("Signal not interpretable")
            }
        })
    }
    pingLocation() {
        return `(${this.position.getXCoordinate()},${this.position.getYCoordinate()}) facing ${this.orientation.getCurrentDirection()}`
    }
}


module.exports = Rover