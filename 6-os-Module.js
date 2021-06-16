
const os = require('os')

const user = os.userInfo();

console.log(user)

console.log(`The System Uptime is ${os.uptime()} seconds`);


const currentosdetail ={
 type: os.type(),
 release: os.release(),
 totalmemory: os.totalmem(),
 freememo: os.freemem()
}


console.log(currentosdetail)