const cardinalPoints = ["N", "E", "S", "W"]
class Orientation {
    constructor(dir) {
        this.dir = dir
        this.nextDirIndex = cardinalPoints.indexOf(dir)
    }

    rotate(rotation) {
        rotation == "R" ? this.nextDirIndex = (this.nextDirIndex + 1) % 4: this.nextDirIndex = ((this.nextDirIndex + 3) % 4)
        this.dir = cardinalPoints[this.nextDirIndex]
    }
}  

module.exports = Orientation