const moduleFactory = {}

function define(name, factory) {
  moduleFactory[name] = factory
}

function require(dependencies, callback) {
  callback(...dependencies.map((item) => moduleFactory[item]()))
}

define('add', function () {})
define('minus', function () {})

require(['add', 'minus'], function (add, minus) {})
