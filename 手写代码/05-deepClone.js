const getType = (val) =>
  Object.prototype.toString
    .call(val)
    .match(/\[(.+)\]/)[1]
    .toLowerCase()

const isObject = (val) => typeof val === 'object' && val !== null

const deepClone = (obj) => {
  if (isObject(obj)) {
    const type = getType(val)
    switch (type) {
      case 'date':
        return new Date(obj)
      case 'regexp':
        return new RegExp(obj.source, obj, flags)
      default:
        const cloneObj = Array.isArray(obj) ? [] : {}
        for (const key in obj) {
          cloneObj[key] = deepClone(obj[key])
        }
        return cloneObj
    }
  } else {
    return obj
  }
}
