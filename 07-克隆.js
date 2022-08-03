//! 解法一
// const source = {
//   foo: 'foo',
//   age: 25
// }
// const target = JSON.parse(JSON.stringify(source))
// source.foo = 'foooo'
// console.log('target >>> ', target)

//! 解法二
// function clone(source) {
//   if (typeof source === 'object') {
//     let target = Array.isArray(source) ? [] : {}
//     for (const key in source) {
//       target[key] = clone(source[key])
//     }
//     return target
//   }
//   return source
// }

// const source = {
//   fullName: 'aicherish',
//   age: 25,
//   home: {
//     address: '江西'
//   },
//   hobbies: ['eat', 'drink', 'play']
// }
// const target = clone(source)
// source.hobbies.push('happy')
// console.log('source >>> ', source)
// console.log('target >>> ', target)

//! 解法三
function clone(source, map = new Map()) {
  if (typeof source === 'object') {
    // 避免循环引用导致死循环的情况
    if (map.has(source)) {
      return map.get(source)
    }
    let target = Array.isArray(source) ? [] : {}
    map.set(source, target)
    for (const key in source) {
      target[key] = clone(source[key], map)
    }
    return target
  }
  return source
}

const source = {
  fullName: 'aicherish',
  age: 25,
  home: {
    address: '江西'
  },
  hobbies: ['eat', 'drink', 'play']
}

source.obj = source

const target = clone(source)
source.hobbies.push('happy')
// console.log('source >>> ', source)
console.log('target >>> ', target)
