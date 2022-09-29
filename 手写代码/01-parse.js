const obj = {
  a: {
    b: {
      c: 'ccc'
    }
  }
}

// const parse = (obj, str) => {
//   const fn =  new Function('obj', 'return obj.', str)
//   return fn(obj)
// }

const parse = (obj, str) => {
  const arr = str.split('.')
  return arr.reduce((acc, cur) => acc[cur])
}

parse(obj, 'obj.a.b.c')
