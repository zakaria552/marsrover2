const Surface = require("./surface")
// instance of the world
const plateau = new Surface(5,5)
// adding rovers to the world
const rover = plateau.addRover(1, 2, "N", plateau)
// const rover2 = plateau.addRover(3, 3, "E", plateau)
console.log(plateau.getGrid())
rover.sendSignal("LMLMLMLMM")
console.log(rover.pingLocation())
console.log(plateau.getGrid())

// rover2.sendSignal("MMRMMRMRRM")
// console.log(rover2.pingLocation())
// console.log(plateau.getGrid())
console.log(-1 % 4)
