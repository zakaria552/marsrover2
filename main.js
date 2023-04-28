const Surface = require("./classes/surface")

const plateau = new Surface(5,5)

const rover = plateau.addRover(1, 2, "N", plateau)
const rover2 = plateau.addRover(3, 3, "E", plateau)

rover.sendSignal("LMLMLMLMM")
console.log(rover.pingLocation())

rover2.sendSignal("MMRMMRMRRM")
console.log(rover2.pingLocation())
