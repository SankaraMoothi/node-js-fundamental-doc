/* Actual The Os Module Its Show The Critical And Usefull Information About The
Your Device */

const os = require("os");

//info about current User

const user = os.userInfo();
console.log(user);

//Method that return system uptime in second

console.log(`The System Uptime ${os.uptime}`);

const CurrentOs = {
  name: os.type(),
  released: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(CurrentOs);
