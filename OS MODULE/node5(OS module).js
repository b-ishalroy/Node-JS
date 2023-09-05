const os = require("os")
console.log(os.arch())
// console.log(os.freemem())

const freememory=os.arch();
console.log(`${freememory/1024/1024/1024}`);

const constants = os.constants
console.log(constants)

console.log(os.cpus())

console.log(os.loadavg())

console.log(os.machine())


console.log(os.uptime())

console.log(os.totalmem())