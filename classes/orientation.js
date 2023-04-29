class Orientation {
    constructor(direction) {
        this.cardinalPoints = {"N": [0,1], "E": [1,0], "S": [0,-1], "W": [-1,0]}
        this.currentDirection = direction
        this.currentDirectionIndex = Object.keys(this.cardinalPoints).indexOf(direction)
    }

    changeOrientationByTurn(turn) {
        if(turn == "R") {
            this.currentDirectionIndex = (this.currentDirectionIndex + 1) % 4
        } else {
            this.currentDirectionIndex = ((this.currentDirectionIndex + 3) % 4)
        }
        this.currentDirection = Object.keys(this.cardinalPoints)[this.currentDirectionIndex]
    }
    getCurrentDirection() {
        return this.currentDirection
    }
    getCardinalPoints() {
        return this.cardinalPoints
    }
    getTurn() {
        let turns = ["up", "right", "down", "left"]
        return turns[this.currentDirectionIndex]
    }
}  

module.exports = Orientation