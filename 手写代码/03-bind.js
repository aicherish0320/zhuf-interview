const obj = {
  foo: 'foo'
}

const fn = function (a) {
  console.log(this.foo, a)
}

function _bind(fn, context, ...arg) {
  return (...args) => {
    fn.call(context, ...arg, ...args)
  }
}

const newFn = fn.bind(obj)
