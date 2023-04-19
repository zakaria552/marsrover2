const Rover = require("./rover.js")
class Surface{
    constructor(row, col) {
        this.grid = []
        for(let i = 0; i <= row; i++) {
            this.grid.push([])
            for(let j = 0; j <= col; j++) {
                this.grid[i].push("")
            }
        }
    }
    // returns 2d array where the bottom-left coordinates points to (0,0)
    getGrid() {
        let reversedGrid = []
        for(let i = 0; i < this.grid.length; i++) {
            reversedGrid.push([])
            for(let j = this.grid[i].length - 1; j >=0; j--) {
                reversedGrid[i].push(this.grid[i][j])
            }
        }
        return reversedGrid
    }

    addRover(x, y, dir, surface) {
        let rover = new Rover(x, y, dir, surface)
        this.grid[x][y] = rover
        return rover
    }
    updateRoverCordinateOnSurface(xi, yi, x, y) {
        let temp = this.grid[xi][yi]
        this.grid[x][y] = temp
        this.grid[xi][yi] = ""

    }
}

module.exports = Surface