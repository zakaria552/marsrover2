const Orientation = require("../orientation")

describe("Orientation class", () => {
    test("create an instance of oerientation given direction", () => {
        const orient = new Orientation("W")
        expect(orient.dir).toBe("W")
    })

    test("change to the correct orientation after rotating 90 degree to the left", () => {
        const orient = new Orientation("W")
        // facing west turn to the left should give us dir of south
        orient.rotate("L")
        expect(orient.dir).toBe("S")
        // facing south turn to the left should give us dir of east
        console.log(orient.dir)
        orient.rotate("L")
        expect(orient.dir).toBe("E")
        // facing east turn to the left should give us dir of north
        orient.rotate("L")
        expect(orient.dir).toBe("N")
    })
    test("change to the correct orientation after rotating 90 degree to the right", () => {
        const orient = new Orientation("W")
        // facing west turn to the right should give us dir of north
        orient.rotate("R")
        expect(orient.dir).toBe("N")
        // facing north turn to the right should give us dir of east
        console.log(orient.dir)
        orient.rotate("R")
        expect(orient.dir).toBe("E")
        // facing east turn to the right should give us dir of south
        orient.rotate("R")
        expect(orient.dir).toBe("S")
    })

})
