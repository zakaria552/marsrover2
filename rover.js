class Rover {
    constructor(x, y, dir) {
        this.x = x
        this.y = y
        this.dir = dir
    }

    changeDir(dir) {
        if(dir == "L") {
            this.dir = Rover.cardialPoint("L", this.dir)
            console.log()
        } else if(dir == "R") {
            this.dir = cardialPoint("R", this.dir)
        } else {
            console.log("Rotation not recognized!!")
        }
    }

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
            switch (this.dir) {
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
}


module.exports = Rover