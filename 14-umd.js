;((global, factory) => {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory)
  } else if (typeof exports === 'object') {
    let _ = require('lodash')
    module.exports = factory(_)
  } else {
    global.testModule = factory(global.jQuery)
  }
})(this, (_) => {
  return {}
})
