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
        switch (this.orientation.dir) {
            case "N":
                this.surface.motionLimits(this.position.x, this.position.y + 1) ? this.position.setY(1): ""
                break
            case "S":
                this.surface.motionLimits(this.position.x, this.position.y - 1) ? this.position.setY(-1): ""
                break
            case "E":
                this.surface.motionLimits(this.position.x + 1, this.position.y) ? this.position.setX(1): ""
                break
            case "W":
                this.surface.motionLimits(this.position.x - 1, this.position.y) ? this.position.setX(-1): ""
                break
        }
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
        return `(${this.position.x},${this.position.y}) facing ${this.orientation.dir}`
    }
}


module.exports = Rover