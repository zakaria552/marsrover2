class Orientation {
    constructor(cardinalPoint) {
        this.cardinalPoints = {
            "N": { move: [0, 1], index: 0 , cardinalPoint: "N"},
            "E": { move: [1, 0], index: 1, cardinalPoint: "E"},
            "S": { move: [0, -1], index: 2, cardinalPoint: "S"},
            "W": { move: [-1, 0], index: 3, cardinalPoint: "W"}
        }
        this.currentCardinalPoint = cardinalPoint
    }

    changeOrientationByTurn(turn) {
        let currentCardinalPointIndex;
        if (turn == "R") {
            currentCardinalPointIndex = (this.cardinalPoints[this.currentCardinalPoint].index + 1) % 4
        } else {
            currentCardinalPointIndex = ((this.cardinalPoints[this.currentCardinalPoint].index + 3) % 4)
        }
        this.currentCardinalPoint = Object.values(this.cardinalPoints)[currentCardinalPointIndex].cardinalPoint
    }

    getDeltaXY() {
        return this.cardinalPoints[this.currentCardinalPoint].move
    }

    getcurrentCardinalPoint() {
        return this.currentCardinalPoint
    }

    getCardinalPoints() {
        return this.cardinalPoints
    }

}

module.exports = Orientation