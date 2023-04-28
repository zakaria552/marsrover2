class Orientation {
    constructor(dir) {
        this.cardinalPoints = ["N", "E", "S", "W"]
        this.dir = dir
        this.nextDirIndex = this.cardinalPoints.indexOf(dir)
    }

    rotate(rotation) {
        rotation == "R" ? this.nextDirIndex = (this.nextDirIndex + 1) % 4: this.nextDirIndex = ((this.nextDirIndex + 3) % 4)
        this.dir = this.cardinalPoints[this.nextDirIndex]
    }
    getDir() {
        return this.dir
    }
    getOrientationIncrements() {
        const orientationIncrements = [[0,1], [1,0], [0,-1], [-1,0]]
        return orientationIncrements[this.nextDirIndex]
    }
    getTurn() {
        let turns = ["up", "right", "down", "left"]
        return turns[this.nextDirIndex]
    }
}  

module.exports = Orientation