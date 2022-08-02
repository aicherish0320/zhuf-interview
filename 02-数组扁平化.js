let arr = [[1], [2, 3], [4, 5, 6, [7, 8, [9, 10, [11]]]], [12]]
//! 方法一
// console.log(arr.flat(Infinity))
//! 方法二
// console.log(
//   arr
//     .toString()
//     .split(',')
//     .map((n) => Number(n))
// )
//! 方法三
// console.log(
//   JSON.stringify(arr)
//     .replace(/\[|\]/g, '')
//     .split(',')
//     .map((n) => Number(n))
// )
//! 方法四
// while (arr.some((item) => Array.isArray(item))) {
//   arr = [].concat(...arr)
// }
// console.log(arr)
//! 方法五
Array.prototype.myFlag = function () {
  const result = []
  let _this = this
  let maxDepth = 1

  function _flat(arr, depth = 1) {
    for (let i = 0; i < arr.length; i++) {
      const arrI = arr[i]
      maxDepth = Math.max(maxDepth, depth)
      if (Array.isArray(arrI)) {
        _flat(arrI, depth + 1)
      } else {
        result.push(arrI)
      }
    }
  }
  _flat(_this)

  console.log('maxDepth >>> ', maxDepth)
  return result
}

console.log(arr.myFlag())
