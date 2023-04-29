const Rover = require("../classes/rover")
const Surface = require("../classes/surface")
describe("rover class", () => {
    test("create an instance of rover given its cordinate and orientation", () => {
        const rover = new Rover(1, 2, "W")
        expect(rover.orientation.currentDirection).toBe("W")
        expect(rover.position.x).toBe(1)
        expect(rover.position.y).toBe(2)
    })
    test("rover has instance of the world it is dropped at", () => {
        const plateau = new Surface(5,5)
        const rover = plateau.addRover(1,2,"E", plateau)
        expect(rover.surface).toEqual(plateau)
    })
    test("change the orientation of the rover after receiving rotation singal", () => {
        const rover = new Rover(1, 2, "W")
        rover.turn("L")
        expect(rover.orientation.currentDirection).toBe("S")
        rover.turn("R")
        rover.turn("R")
        expect(rover.orientation.currentDirection).toBe("N")
    })
    test("rover moves one step towards the direction it facing", () => {
        const plateau = new Surface(5,5) 
        const rover = plateau.addRover(4, 2, "W", plateau)

        rover.move()
        expect(rover.position.x).toBe(3)
        expect(rover.position.y).toBe(2)

        rover.orientation.changeOrientationByTurn("R")
        rover.move()
        expect(rover.position.x).toBe(3)
        expect(rover.position.y).toBe(3)

        rover.orientation.changeOrientationByTurn("R")
        rover.move()
        rover.move()
        expect(rover.position.x).toBe(5)
        expect(rover.position.y).toBe(3)
        
    })
    test("rover either moves or changes orientation based on valid incoming signal or signals", () => {
        const plateau = new Surface(5,5)
        const rover = plateau.addRover(1, 2, "E", plateau)
        rover.sendSignal("M")
        rover.sendSignal("M")
        expect(rover.position.x).toBe(3)
        expect(rover.position.y).toBe(2)
        rover.sendSignal("L")
        expect(rover.orientation.currentDirection).toBe("N")
        rover.sendSignal("MML")
        expect(rover.orientation.currentDirection).toBe("W")
        expect(rover.position.x).toBe(3)
        expect(rover.position.y).toBe(4)
    })
    test("rover ignores the move signal if the cordinate of the next move is out of bound", () => {
        const plateau = new Surface(5,5)
        const rover = plateau.addRover(1, 2, "W", plateau)
        rover.sendSignal("MMM")
        expect(rover.position.x).toBe(0)
        expect(rover.position.y).toBe(2)
    })
    test("rover does not move to a location that is already occupied", () => {

        const plateau = new Surface(5,5)
        const rover = plateau.addRover(1, 2, "N", plateau)
        const rover2 = plateau.addRover(2, 2, "W", plateau)
        rover2.sendSignal("M")
        
        expect(rover2.position.x).toBe(2)
        expect(rover2.position.y).toBe(2)
    })
   
})
