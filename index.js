import os, { cpus } from "node:os";
import chalk from "chalk"; 

function checkOS() {
    const platform = os.platform();
    switch (platform) {
        case "win32":
            return "Windows";
        case "darwin":
            return "MacOS";
        case "linux":
            return "Linux";
        default:
            return "Unknown OS";
    }
}

let totalcores = cpus().length;
let totalidletime = 0;
let array = []
cpus().forEach(CPU => {
    totalidletime += CPU.times.idle;
});
array.push(totalidletime);

let info = [];
cpus().map((core,i)=>{                   //map returns array 
   let detail  =  {
  idletime: core.times.idle,
  speed : core.speed
 }
 info.push(detail);
});
// console.table(info)

setInterval(()=>{

function totalUsage(){
    const newCPUS = Object.values(cpus().times).reduce((a,b)=>{
     return a+b ;});
    //  console.log(newCPUS);
}
},1000)



// console.log(cpus());

console.log(chalk.cyan.bold("System Info:"));
console.log("Current system : " + chalk.yellowBright(checkOS()));
console.log("Total CPU Cores : " + chalk.yellowBright(totalcores));
console.log('Host Name ' + os.hostname())
console.log("Total Memory:" + os.totalmem()/(1024*1024*1024).toFixed(10)  + chalk.yellowBright("GB") );
console.log('Total system idle time is' + " " + chalk.yellowBright(totalidletime));
console.log("Write" + chalk.cyan(" .help ") + "for more info");



