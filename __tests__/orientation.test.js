const Orientation = require("../classes/orientation")

describe("Orientation class", () => {
    describe("create an instance of orientation given direction", () => {
        test("", () => {
            const orient = new Orientation("W")
            expect(orient.currentDirection).toBe("W")
        })

    })
    describe("changes to the correct orientation after rotating 90 degree to the left", () => {
        const orient = new Orientation("W")
        test("facing west turning to the left should give us dir of south", () => {
            orient.changeOrientationByTurn("L")
            expect(orient.currentDirection).toBe("S")
        })
        test("facing south turn to the left should give us dir of east", () => {
            orient.changeOrientationByTurn("L")
            expect(orient.currentDirection).toBe("E")
            
        })
        test("facing east turn to the left should give us dir of north", () => {
            orient.changeOrientationByTurn("L")
            expect(orient.currentDirection).toBe("N")

        })

    })
    describe("change to the correct orientation after rotating 90 degree to the right", () => {
        const orient = new Orientation("W")
        test("facing west turn to the right should give us dir of north", () => {
            orient.changeOrientationByTurn("R")
            expect(orient.currentDirection).toBe("N")
        })
        test("facing north turn to the right should give us dir of east", () => {
            orient.changeOrientationByTurn("R")
            expect(orient.currentDirection).toBe("E")
        })
        test("facing east turn to the right should give us dir of south", () => {
            orient.changeOrientationByTurn("R")
            expect(orient.currentDirection).toBe("S")
        })
    })

})
