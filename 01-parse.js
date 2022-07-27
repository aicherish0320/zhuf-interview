/*

*/

const obj = {
  a: 1,
  b: {
    c: 2
  },
  d: [
    {
      f: 3
    }
  ]
}

//! 解法1
// function parse(obj, str) {
//   let fn = new Function('obj', 'return obj.' + str)
//   return fn(obj)
// }
//! 解法2
function parse(obj, str) {
  str = str.replace(/\[(\d+)\]/g, '.$1')
  const arr = str.split('.')
  return arr.reduce((cur, acc) => cur[acc], obj)
}

const r1 = parse(obj, 'a')
const r2 = parse(obj, 'b.c')
const r3 = parse(obj, 'd[0].f')

console.log('r1 >>> ', r1, r2, r3)
