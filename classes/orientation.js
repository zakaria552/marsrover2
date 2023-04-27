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
    getCardinalPoints() {
        return this.cardinalPoints
    }
}  

module.exports = Orientation