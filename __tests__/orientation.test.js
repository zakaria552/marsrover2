const Orientation = require("../orientation")

describe("Orientation class", () => {
    test("create an instance of oerientation given direction", () => {
        const orient = new Orientation("W")
        expect(orient.dir).toBe("W")
    })

})