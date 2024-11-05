const system = require('os');

let platForm = system.platform();
let arch = system.arch();
let mem = system.totalmem();

console.log(platForm);
console.log(arch);
console.log(mem)

