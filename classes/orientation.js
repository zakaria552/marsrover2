class Orientation {
    constructor(dir) {
        this.cardinalPoints = ["N", "E", "S", "W"]
        this.dir = dir
        this.dirIndex = this.cardinalPoints.indexOf(dir)
    }

    rotate(rotation) {
        if(rotation == "R") {
            this.dirIndex = (this.dirIndex + 1) % 4
        } else {
            this.dirIndex = ((this.dirIndex + 3) % 4)
        }
        this.dir = this.cardinalPoints[this.dirIndex]
    }
    getDir() {
        return this.dir
    }
    getPositionIncrements() {
        // ["N", "E", "S", "W"] - "N" => [x,y]=[0,1]
        const increments = [[0,1], [1,0], [0,-1], [-1,0]]
        return increments[this.dirIndex]
    }
    getTurn() {
        let turns = ["up", "right", "down", "left"]
        return turns[this.dirIndex]
    }
}  

module.exports = Orientation