;(function (prototype) {
  Object.create = function (prototype) {
    function Fn() {}
    Fn.prototype = prototype
    return new Fn()
  }

  prototype.bind = function (context, ...outerArgs) {
    const thatFn = this
    function fBound(...innerArgs) {
      return thatFn.apply(this instanceof thatFn ? this : context, [
        ...outerArgs,
        ...innerArgs
      ])
    }
    fBound.prototype = Object.create(thatFn.prototype)
    return fBound
  }
})(Function.prototype)

function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.toString = function () {
  console.log(`${this.x}, ${this.y}`)
}
const emptyObj = {}
const YPoint = Point.bind(null, 1)
const axiosPoint = new YPoint(2)

axiosPoint.toString()
console.log(axiosPoint instanceof Point)
console.log(axiosPoint instanceof YPoint)
