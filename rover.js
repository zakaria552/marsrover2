const Orientation = require("./orientation")
class Rover {
    constructor(x, y, dir, surface) {
        this.x = x
        this.y = y
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
                this.surface.updateRoverCordinateOnSurface(this.x, this.y, this.x, this.y+1)
                this.y++
                break
            case "S":
                this.surface.updateRoverCordinateOnSurface(this.x, this.y, this.x, this.y-1)
                this.y--
                break
            case "E":
                this.surface.updateRoverCordinateOnSurface(this.x, this.y, this.x+1, this.y)
                this.x++
                break
            case "W":
                this.surface.updateRoverCordinateOnSurface(this.x, this.y, this.x-1, this.y)
                this.x--
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
        return `(${this.x},${this.y}) facing ${this.orientation.dir}`
    }
}


module.exports = Rover