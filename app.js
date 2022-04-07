// npm - global command, comes with node
//your can see you version type by typing: "npm --version" or "npm --v" in your terminal 

//local dependency - use it only in this particular project
//type in terminal: "npm i <packageName>"

//global dependency - use it in any project
//type in terminal: "npm install -g <packageName>"
//type in terminal: "sudo npm install -g <packageName>" ( for mac)

//package.json - manifest file (store important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)


//should be able to access different packages once npm package installed
//mine did not work. revisit time stamp before 2hour mark
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)