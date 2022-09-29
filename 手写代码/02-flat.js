const arr = [[1], [2], [3, [4]], [5]]

// console.log(' >>> ', arr.flat(Infinity))

// console.log(
//   arr
//     .toString()
//     .split(',')
//     .map((v) => Number(v))
// )

// function flat(arr) {
//   while (arr.some((v) => Array.isArray(v))) {
//     arr = [].concat(arr)
//   }

//   return arr
// }

// function flat(arr) {
//   if (!Array.isArray(arr)) return false

//   return arr.reduce((prev, cur) => {
//     return prev.concat(Array.isArray(cur) ? flat(cur) : cur)
//   }, [])
// }

function flat(arr, len) {
  if (!Array.isArray(arr)) return false

  return len > 0
    ? arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flat(cur, len - 1) : cur)
      }, [])
    : arr.slice()
}

console.log(flat(arr))
