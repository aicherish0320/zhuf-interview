//! 解法一
// const add = (function (length) {
//   let allArgs = []
//   function _add(...args) {
//     allArgs = [...allArgs, ...args]
//     if (allArgs.length >= length) {
//       let ret = allArgs.reduce((acc, cur) => acc + cur, 0)
//       allArgs.length = 0
//       return ret
//     } else {
//       return _add
//     }
//   }
//   return _add
// })(5)

// console.log(add(1, 2, 3, 4, 5))
// console.log(add(1)(2)(3)(4)(5))
// console.log(add(1, 2)(3, 4, 5))

//! 解法二
// function add(...args) {
//   let _add = add.bind(null, ...args)
//   _add.toString = function () {
//     return args.reduce((acc, cur) => acc + cur, 0)
//   }
//   return _add
// }

// alert(add(1, 2, 3, 4, 5))
// alert(add(1)(2)(3)(4)(5))
// alert(add(1, 2)(3, 4, 5))

//! 解法三

function currying(fn, ...args) {
  return args.length < fn.length
    ? (...innerArgs) => currying(fn, ...args, ...innerArgs)
    : fn(...args)
}

function addFn(a, b, c, d, e) {
  return a + b + c + d + e
}

const add = currying(addFn)

console.log(add(1, 2, 3, 4, 5))
console.log(add(1)(2)(3)(4)(5))
console.log(add(1, 2)(3, 4, 5))
