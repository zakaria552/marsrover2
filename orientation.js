const cardinalPoints = ["N", "E", "S", "W"]
class Orientation {
    constructor(dir) {
        this.dir = dir
        this.turn = cardinalPoints.indexOf(dir)
    }

    rotate(rotation) {
        // rotation == "R" ? this.turn = (this.turn + 1) % 4: this.turn = (((this.turn - 1) % 4) +4) % 4
        rotation == "R" ? this.turn = (this.turn + 1) % 4: this.turn = (((this.turn - 1) % 4) +4) % 4

        this.dir = cardinalPoints[this.turn]
    }
}  
const orient = new Orientation("W")
// facing west turn to the left should give us dir of south
module.exports = Orientation