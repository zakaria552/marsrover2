const Orientation = require("./orientation")
const Position = require("./position.js")

class Rover {
    constructor(x, y, dir, surface) {
        this.position = new Position(x, y)
        this.orientation = new Orientation(dir)
        this.surface = surface
    }
    changeOrient(turn) {
        this.orientation.rotate(turn)
    }
    move()  {
        let hasMoved = true
        if(this.surface.isMovementPossible(this)) {
            this.position = this.position.getRoverNextPosition(this.orientation)
        } else {
            hasMoved = false
        }
        
        if(hasMoved) {
            console.log( "moving ", this.orientation.getTurn())
        } else {
            console.log("can not move")
        }
    }
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