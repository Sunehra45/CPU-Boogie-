import os from "node:os";
import chalk from "chalk";
import { cpus } from "node:os";
import { memoryUsage } from "node:process";

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


//calculation of per core usage : 
console.log(cpus()[0]);

setInterval(()=>{
cpus().map((core,i)=>{
 return {
   index : i, 
   memoryUsage : 
  }
})
function calculateMemory(){
const oldcpus = Object.values(cpus().times).reduce((a,b)=>{ return a+b});
}
},1000)



console.log(chalk.cyan.bold("System Info:"));
console.log("Current system : " + chalk.yellowBright(checkOS()));
console.log("Total CPU Cores : " + chalk.yellowBright(totalcores));
console.log('Total system idle time is' + " " + chalk.yellowBright(totalidletime));
console.log("Write" + chalk.cyan(" .help ") + "for more info");


