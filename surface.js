const Rover = require("./rover.js")
class Surface{
    constructor(row, col) {
        this.grid = []
        for(let i = 0; i < row; i++) {
            this.grid.push([])
            for(let j = 0; j < col; j++) {
                this.grid[i].push("")
            }
        }
    }

    getGrid() {
        return this.grid
    }

    addRover(x, y, dir) {
        let rover = new Rover(x, y, dir)
        this.grid[x][y] = rover
        return rover

    }
    updateRoverCordinate(xi, yi, x, y) {
        let temp = this.grid[xi][yi]
        this.grid[x][y] = temp
        this.grid[xi][yi] = ""

    }
}

module.exports = Surface