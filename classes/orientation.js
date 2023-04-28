class Orientation {
    constructor(dir) {
        this.cardinalPoints = ["N", "E", "S", "W"]
        this.dir = dir
        this.nextDirIndex = this.cardinalPoints.indexOf(dir)
        this.dirXY = [[0,1], [1,0], [0,-1], [-1,0]][this.nextDirIndex]
        this.turns = ["up", "right", "down", "left"]
    }

    rotate(rotation) {
        rotation == "R" ? this.nextDirIndex = (this.nextDirIndex + 1) % 4: this.nextDirIndex = ((this.nextDirIndex + 3) % 4)
        this.dir = this.cardinalPoints[this.nextDirIndex]
        this.dirXY = [[0,1], [1,0], [0,-1], [-1,0]][this.nextDirIndex]
    }
    getDir() {
        return this.dir
    }
    getCardinalPoints() {
        return this.cardinalPoints
    }
    getOrientationInXY() {
        return this.dirXY
    }
    getTurn() {
        return this.turns[this.nextDirIndex]
    }
}  

module.exports = Orientation