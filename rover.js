class Rover {
    constructor(x, y, dir) {
        this.x = x
        this.y = y
        this.dir = dir
    }
    // changes the current direction given a direction
    changeDir(dir) {
        this.dir = Rover.cardialPoint(dir, this.dir)
    }
    // checks where the current direction is and moves accordingly
    move(surface)  {
        switch (this.dir) {
            case "N":
                surface.updateRoverCordinate(this.x, this.y, this.x, this.y+1)
                this.y++
                break
            case "S":
                surface.updateRoverCordinate(this.x, this.y, this.x, this.y-1)
                this.y--
                break
            case "E":
                surface.updateRoverCordinate(this.x, this.y, this.x+1, this.y)
                this.x++
                break
            case "W":
                surface.updateRoverCordinate(this.x, this.y, this.x-1, this.y)
                this.x--
                break
        }
    }
    // helper function that determines the correct direction when the rover rotates at 90
    // degree angle left or right
    static cardialPoint(turn, dir) {
        if(turn == "L") {
            console.log(dir)
            switch (dir) {
                case "N":
                    return "W"
                case "S":
                    return "E"
                case "E":
                    return "N"
                case "W":
                    return "S"
            }
        } else {
            switch (dir) {
                case "N":
                    return "E"
                case "S":
                    return "W"
                case "E":
                    return "S"
                case "W":
                    return "N"
            }
        }
    }
    // sends signal to the rover and the rover intepr
    sendSignal(str, surface) {
        str.split("").forEach((c) => {
            if ("LR".includes(c)) {
                this.changeDir(c)
            } else if(c == "M") {
                this.move(surface)
            } else {
                console.log("signal not interpretable")
            }
        })
    }
    pingLocation() {
        return `(${this.x},${this.y}) facing ${this.dir}`
    }
}


module.exports = Rover