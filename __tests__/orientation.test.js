const Orientation = require("../classes/orientation")

describe("Orientation class", () => {
    test("create an instance of oerientation given direction", () => {
        const orient = new Orientation("W")
        expect(orient.currentDirection).toBe("W")
    })

    test("changes to the correct orientation after rotating 90 degree to the left", () => {
        const orient = new Orientation("W")
        // facing west turn to the left should give us dir of south
        orient.changeOrientationByTurn("L")
        expect(orient.currentDirection).toBe("S")
        //facing south turn to the left should give us dir of east
        console.log(orient.currentDirection)
        orient.changeOrientationByTurn("L")
        console.log(orient.currentDirection)
        expect(orient.currentDirection).toBe("E")
        // // facing east turn to the left should give us dir of north
        orient.changeOrientationByTurn("L")
        expect(orient.currentDirection).toBe("N")
    })
    test("change to the correct orientation after rotating 90 degree to the right", () => {
        const orient = new Orientation("W")
        // facing west turn to the right should give us dir of north
        orient.changeOrientationByTurn("R")
        expect(orient.currentDirection).toBe("N")
        // facing north turn to the right should give us dir of east
        console.log(orient.currentDirection)
        orient.changeOrientationByTurn("R")
        expect(orient.currentDirection).toBe("E")
        // facing east turn to the right should give us dir of south
        orient.changeOrientationByTurn("R")
        expect(orient.currentDirection).toBe("S")
    })

})
