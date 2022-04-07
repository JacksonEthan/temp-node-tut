//CommonJS, every file is module (by default)
//Modules - encapsulated code (only share minmum)
const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative flavor')
require('./7-mind-grenade')//doesnt need to be assigned a variable or invoked prior to being called
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)