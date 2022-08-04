const getType = require('./08-获取数据数据类型')

const obj = {
  married: true,
  age: 19,
  name: 'jack',
  girlfriend: null,
  boyfriend: undefined,
  flag: Symbol('man'),
  home: { name: '江西' },
  set: new Set(),
  map: new Map(),
  getName: function () {},
  hobbies: ['1', '2', 3],
  // error: new Error('我错了'),
  pattern: /^reg$/
  // math: Math,
  // json: JSON
}
obj.set.add(1)
obj.map.set('name', 'tom')

// 首先要对类型进行分类
const OBJECT_TYPES = [
  {},
  [],
  new Map(),
  new Set(),
  new Error(),
  new Date(),
  /^$/
].map((item) => getType(item))
const MAP_TYPE = getType(new Map())
const SET_TYPE = getType(new Set())
const SYMBOL_TYPE = getType(Symbol())
const REGEXP_TYPE = getType(/^$/)
const CONSTRUCTOR_TYPE = [new Error(), new Date()].map((item) => getType(item))

function clone(source) {
  const type = getType(source)
  if (!OBJECT_TYPES.includes(type)) {
    return source // 基本数据类型直接返回
  }
  if (CONSTRUCTOR_TYPE.includes(type)) {
    return new source.constructor(source)
  }
  let target = new source.constructor()
  if (SYMBOL_TYPE === type) {
    return Object(Symbol.prototype.valueOf.call(source))
  }
  if (REGEXP_TYPE === type) {
    const flags = /\w*$/
    let target = new RegExp(source.source, flags.exec(source))
    target.lastIndex = source.lastIndex
    return target
  }
  if (SET_TYPE === type) {
    source.forEach((value) => target.add(clone(value)))
    return target
  }
  if (MAP_TYPE === type) {
    source.forEach((value, key) => target.set(key, clone(value)))
    return target
  }
  for (const key in source) {
    target[key] = clone(source[key])
  }
  return target
}

const newObj = clone(obj)
console.log('newObj >>> ', newObj)
