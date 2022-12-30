//GLOBALS -No WINDOWS!!!

// __dirname - Path to Current directory...
// __filename - file name...
// require    - function to use modules(CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being execute

console.log(__dirname);
console.log(__filename);

// Remaing We Going To Cover In Further Class..

/* We Can Use SetInterval And SetTimeout in Node */

setInterval(() => {
  let date = new Date();
  let time =
    " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  console.log(`Hello WOrld !!!${time}`);
}, 1000);

setTimeout(() => {
  console.log("Hello World");
}, 4000);
