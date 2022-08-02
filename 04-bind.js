;(function (prototype) {
  prototype.bind = function (context, ...outerArgs) {
    return (...innerArgs) => {
      return this.call(context, ...outerArgs, ...innerArgs)
    }
  }
})(Function.prototype)

function sum(...args) {
  return this.prefix + args.reduce((acc, cur) => acc + cur, 0)
}

const obj = { prefix: '$' }
const bindSUM = sum.bind(obj, 1, 2, 3, 4)
console.log(bindSUM(5, 6))
