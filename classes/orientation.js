class Orientation {
    constructor(direction) {
        this.cardinalPoints = {
            "N": { move: [0, 1], index: 0 , cardinalPoint: "N"},
            "E": { move: [1, 0], index: 1, cardinalPoint: "E"},
            "S": { move: [0, -1], index: 2, cardinalPoint: "S"},
            "W": { move: [-1, 0], index: 3, cardinalPoint: "W"}
        }
        this.currentDirection = direction
        this.currentDirectionIndex = this.cardinalPoints[direction].index
    }

    changeOrientationByTurn(turn) {
        if (turn == "R") {
            this.currentDirectionIndex = (this.cardinalPoints[this.currentDirection].index + 1) % 4
        } else {
            this.currentDirectionIndex = ((this.cardinalPoints[this.currentDirection].index + 3) % 4)
        }
        this.currentDirection = Object.values(this.cardinalPoints)[this.currentDirectionIndex].cardinalPoint
    }
    getCurrentDirection() {
        return this.currentDirection
    }
    getCardinalPoints() {
        return this.cardinalPoints
    }
}

module.exports = Orientation