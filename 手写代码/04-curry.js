function add(a, b, c) {
  return a + b + c
}

add(1, 2, 3)

function curry(fn) {
  const len = fn.length
  const newFn = (...args) => {
    if (len === args.length) {
      return fn.call(this, ...args)
    } else {
      return (...arg) => {
        return newFn(...args, ...arg)
      }
    }
  }
  return newFn
}

const newAdd = curry(add)

console.log(newAdd(1)(2)(3))
