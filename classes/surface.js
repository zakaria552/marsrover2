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
    isRoverColliding(roverNextPosition) {
        const roverX = roverNextPosition.getX()
        const roverY = roverNextPosition.getY()
        for(let i = 0; i < this.rovers.length; i++) {
            let rover2 = this.rovers[i]
            if(rover2.position.getX() == roverX && rover2.position.getY() == roverY) {
                return true
            }
        }
        return false
    }
    isRoverWithInBounds(roverNextPosition) {
        const roverX = roverNextPosition.getX()
        const roverY = roverNextPosition.getY()
        if((roverX >= 0 && roverX <= this.sizeX) && (roverY >= 0 && roverY <= this.sizeY)) {
            return true
        }
        return false
    }
    isMovementPossible(roverNextPosition) {
        return this.isRoverWithInBounds(roverNextPosition) && !this.isRoverColliding(roverNextPosition)
    }
}

module.exports = Surface