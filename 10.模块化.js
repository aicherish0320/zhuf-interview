// const moduleA = (function () {
//   let fullName = 'aicherish'
//   function play() {
//     console.log('play')
//   }
//   return {
//     fullName,
//     play
//   }
// })()

// console.log('moduleA >>> ', moduleA)
//! 自执行函数
// ;(function (global) {
//   function add(a, b) {
//     return a + b
//   }
//   global.add = add
// })(global)
// ;(function (global) {
//   function minus(a, b) {
//     return a - b
//   }
//   global.minus = minus
// })(global)
// ;(function (global, add, minus) {
//   global.mathModule = {
//     add,
//     minus
//   }
// })(global, add, minus)
// console.log(mathModule.add(2, 2))
// console.log(mathModule.minus(2, 2))

//! AMD
// define 定义模块 require 引用模块
// // a.js
// define(function () {
//   function add(a, b) {
//     return a + b
//   }
//   return {
//     add
//   }
// })
// // b.js
// define(function () {
//   function minus(a, b) {
//     return a - b
//   }
//   return {
//     minus
//   }
// })
// 静态引入 预先需要加载好
// CMD 是动态引入
// require(['./modules/a.js', './modules/b.js'], function (a, b) {
//   // a module
//   // b module
// })
//! CMD
// node require 加载别的模块 exports 导处对象
define(function (require, exports) {
  const addModule = require('./addModule')
  const minusModule = require('./minusModule')
})
define(function (require, exports) {
  exports.addModule = function (a, b) {
    return a + b
  }
})

define(function (require, exports) {
  exports.minusModule = function (a, b) {
    return a - b
  }
})
