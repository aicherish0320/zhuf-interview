// sea.js common.js webpack
let factories = {}
let modules = {}

function require(name) {
  if (modules[name]) {
    return modules[name]
  }

  let factory = factories[name]
  let exports = {}
  factory(require, exports)
  modules[name] = exports
  return exports
}

function define(name, factory) {
  factories[name] = factory
}

function use(name) {
  require(name)
}

// 使用
define('addModule', function (require, exports) {
  exports.add = function (a, b) {
    return a + b
  }
})
define('minusModule', function (require, exports) {
  exports.minus = function (a, b) {
    return a - b
  }
})

define('index', function (require, exports) {
  let addModule = require('addModule')
  let minusModule = require('minusModule')
  console.log('addModule >>> ', addModule.add(2, 2))
  console.log('minusModule >>> ', minusModule.minus(2, 2))
})
use('index')
