const Rover = require("./rover.js")
class Surface{
    constructor(width, height) {
        this.roversInSurface = []
        this.width = width
        this.height = height
    }

    addRover(x, y, direction, surface) {
        const rover = new Rover(x, y, direction, surface)
        this.roversInSurface.push(rover)
        return rover
    }
    isRoverColliding(roverNextPosition) {
        const roverXCoordinate = roverNextPosition.getXCoordinate()
        const roverYCoordinate = roverNextPosition.getYCoordinate()
        for(let i = 0; i < this.roversInSurface.length; i++) {
            const rover2 = this.roversInSurface[i]
            if(rover2.position.getXCoordinate() == roverXCoordinate && rover2.position.getYCoordinate() == roverYCoordinate) {
                return true
            }
        }
        return false
    }
    isRoverWithInBounds(roverNextPosition) {
        const roverX = roverNextPosition.getXCoordinate()
        const roverY = roverNextPosition.getYCoordinate()
        if((roverX >= 0 && roverX <= this.width) && (roverY >= 0 && roverY <= this.height)) {
            return true
        }
        return false
    }
    isMovementPossible(rover) {
        const roverNextPosition = rover.position.getRoverNextPosition(rover.orientation)
        return this.isRoverWithInBounds(roverNextPosition) && !this.isRoverColliding(roverNextPosition)
    }
}

module.exports = Surface