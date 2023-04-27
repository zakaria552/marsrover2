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
    collisionDetected(roverPosition, moveIncrements) {
        const roverX = roverPosition.getX() + moveIncrements[0]
        const roverY = roverPosition.getY() + moveIncrements[1]
        for(let i = 0; i < this.rovers.length; i++) {
            let rover2 = this.rovers[i]
            if(rover2.position.getX() == roverX && rover2.position.getY() == roverY) {
                return true
            }
        }
        return false
    }
    roverIsWithInBounds(roverPosition, moveIncrements) {
        const roverX = roverPosition.getX() + moveIncrements[0]
        const roverY = roverPosition.getY() + moveIncrements[1]
        if((roverX >= 0 && roverX <= this.sizeX) && (roverY >= 0 && roverY <= this.sizeY)) {
            return true
        }
        return false
    }
    isMovementPossible(roverPosition, moveIncrements) {
        return this.roverIsWithInBounds(roverPosition, moveIncrements) && !this.collisionDetected(roverPosition,moveIncrements)
    }
}

module.exports = Surface