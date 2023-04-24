const Rover = require("./rover.js")
class Surface{
    constructor(row, col) {
        this.grid = []
        this.rovers = []
        for(let i = 0; i <= row; i++) {
            this.grid.push([])
            for(let j = 0; j <= col; j++) {
                this.grid[i].push("")
            }
        }
    }
    // returns 2d array where the bottom-left coordinates points to (0,0)
    getGrid() {
        this.updateRoverCordinateOnSurface()
        let reversedGrid = this.grid.map((arr) => {
            return arr.map(() => "")
        })
        reversedGrid.forEach((arr, x) => {
            arr.forEach((c, y) => {
                if(this.grid[x][y] != "") {
                    let i = this.grid.length - this.grid[x][y].y
                    let j = this.grid[x][y].x- 1
                    reversedGrid[i][j] = "R"
                }
            })
        })
        

        return reversedGrid
    }

    addRover(x, y, dir, surface) {
        let rover = new Rover(x, y, dir, surface)
        this.rovers.push(rover)
        return rover
    }
    updateRoverCordinateOnSurface() {
        this.rovers.forEach((rover) => {
            this.grid[rover.x][rover.y] = rover
        })
        
    }
}

module.exports = Surface