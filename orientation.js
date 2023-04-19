class Orientation {
    constructor(dir) {
        this.dir = dir
    }

    rotate(turn) {
        if(turn == "L") {
            switch (this.dir) {
                case "N":
                    this.dir = "W"
                    break;
                case "S":
                    this.dir = "E"
                    break;
                case "E":
                    this.dir = "N"
                    break;
                case "W":
                    this.dir = "S"
                    break;
            }
        } else if (turn == "R") {
            switch (this.dir) {
                case "N":
                    this.dir = "E"
                    break;
                case "S":
                    this.dir = "W"
                    break;
                case "E":
                    this.dir = "S"
                    break;
                case "W":
                    this.dir = "N"
                    break;
            }
        }
    }
}

module.exports = Orientation