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
        if(turn == "R") {
            console.log("Turning to the right")
        } else {
            console.log("Turning to the left")
        }
    }

    move()  {
        if(this.surface.isMovementPossible(this)) {
            this.position = this.position.getRoverNextPosition(this.orientation)
            console.log(`Moving forward`)
        } else {
            console.log("can not move")
        }
        console.log(this.pingLocation())
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
        const [roverXCoordinate, roverYCoordinate] = this.position.getCoordinates()
        return `(${roverXCoordinate},${roverYCoordinate}) facing ${this.orientation.getcurrentCardinalPoint()}`
    }
}


module.exports = Rover