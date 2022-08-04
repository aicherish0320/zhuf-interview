// 循环引用问题
// a.js
const b = require('b.js')
console.log(b)
module.exports = { name: 'b' }
// b.js
const a = require('a.js')
console.log(a)
module.exports = { name: 'a' }
