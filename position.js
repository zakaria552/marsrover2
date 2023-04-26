class Position {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    setX(num) {
        this.x = this.x + num
    }
    setY(num) {
        this.y = this.y + num
    }
}

module.exports = Position