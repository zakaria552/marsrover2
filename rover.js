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
                this.canMove(this.x, this.y + 1) ? this.y++: ""
                break
            case "S":
                this.canMove(this.x, this.y - 1) ? this.y--: ""
                break
            case "E":
                this.canMove(this.x + 1, this.y) ? this.x++: ""
                break
            case "W":
                this.canMove(this.x - 1, this.y) ? this.x--: ""
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
    isInBoundry(x, y) {
        const xBound = this.surface.grid.length - 1
        const yBound = this.surface.grid[0].length - 1
        if((x >= 0 && x <= xBound) && (y >= 0 && y <= yBound)) {
            return true
        }
        return false
    }
    isInCollision(x, y) {
        const rovers = this.surface.rovers
        for(let i = 0; i < rovers.length; i++) {
            let rover = rovers[i]
            if(rover.x == x && rover.y == y) {
                return true
            }
        }
        return false
    }
    canMove(x, y) {
        return this.isInBoundry(x,y) &&  !this.isInCollision(x,y)
    }
}


module.exports = Rover