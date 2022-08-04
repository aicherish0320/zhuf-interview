const getType = (val) => Object.prototype.toString.call(val)

// let v1 = 'Hello'
// let v2 = 123
// let v3 = null
// let v4 = undefined
// let v5 = function () {}
// let v6 = { name: 'jack' }
// let v7 = [1, 2, 3]
// let v8 = Symbol()
// let v9 = /\a/

// console.log(getType(v1))
// console.log(getType(v2))
// console.log(getType(v3))
// console.log(getType(v4))
// console.log(getType(v5))
// console.log(getType(v6))
// console.log(getType(v7))
// console.log(getType(v8))
// console.log(getType(v9))

module.exports = getType
