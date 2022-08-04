// const s1 = Symbol('a')
// const s2 = Symbol.prototype.valueOf.call(s1)

// console.log('s1 >>> ', s1 === s2, Object(1), new Object(1))

let reg = /\.jpg$/gi
const flags = /\w*$/
console.log(flags.exec(reg), reg.source)
// const target = new reg.constructor(reg.source, flags.exec(reg))
// console.log('target >>> ', target)
