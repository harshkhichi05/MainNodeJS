
const sayHi = require('./1-function')
const names = require('./2-variables')
const data =  require('./3-module-varients')

require('./4-require-varients')

console.log(data)
sayHi(names.john);
sayHi(names.peter);
sayHi("Hello World")