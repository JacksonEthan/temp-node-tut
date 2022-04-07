//node is external the the browser, so there is no window in which you can call preset modules
//there are the following:
//__dirname - path to current directory
//__filename - file name
//require - function to use modules (CommonJS)
//module - infoabout current moduel (file)
//process - info about environment (env) where the program is being executed

console.log(__dirname)

setInterval(() => {
    console.log('hello world!')
},1000);