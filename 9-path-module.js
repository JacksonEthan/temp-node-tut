const path = require('path')


console.log(path.sep)//pathway seperator


const filePath = path.join('/content', 'subfolder', 'text.txt')//joing folders to create the file path
console.log(filePath)

const base = path.basename(filePath)//shows the base file name
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')//absolute path. this is important as nodes will be used in different environments and may need to access the file path to a specific file/folder
console.log(absolute)