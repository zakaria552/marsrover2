const Rover = require("./rover.js")
class Surface{
    constructor(sizeX, sizeY) {
        this.rovers = []
        this.sizeX = sizeX
        this.sizeY = sizeY
    }

    addRover(x, y, dir, surface) {
        let rover = new Rover(x, y, dir, surface)
        this.rovers.push(rover)
        return rover
    }
    checkCollision(roverX, roverY) {
        for(let i = 0; i < this.rovers.length; i++) {
            let rover2 = this.rovers[i]
            if(rover2.position.x == roverX  && rover2.position.y == roverY) {
                return true
            }
        }
        return false
    }
    boundaryCheck(roverX, roverY) {
        if((roverX >= 0 && roverX <= this.sizeX) && (roverY >= 0 && roverY <= this.sizeY)) {
            return true
        }
        return false
    }
    motionLimits(roverX, roverY) {
        return this.boundaryCheck(roverX,roverY) && !this.checkCollision(roverX,roverY)
    }
}

module.exports = Surface