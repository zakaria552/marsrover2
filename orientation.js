const cardinalPoints = ["N", "E", "S", "W"]
class Orientation {
    constructor(dir) {
        this.dir = dir
        this.nextDirIndex = cardinalPoints.indexOf(dir)
    }

    rotate(rotation) {
        if(this.nextDirIndex == 0 && rotation == "L") {
            this.nextDirIndex = ((this.nextDirIndex - 1) % 4) + 4
        } else {
            rotation == "R" ? this.nextDirIndex = (this.nextDirIndex + 1) % 4: this.nextDirIndex = (this.nextDirIndex - 1) % 4
        }

        // rotation == "R" ? this.nextDirIndex = (this.turn + 1) % 4: this.nextDirIndex = (((this.nextDirIndex - 1) % 4) +4) % 4

        this.dir = cardinalPoints[this.nextDirIndex]
    }
}  

module.exports = Orientation