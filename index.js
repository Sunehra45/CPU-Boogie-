import { cpus } from "node:os";
import chalk from "chalk";

let totalcores = cpus().length ;
let totalidletime = 0 ;
let array = []

cpus().forEach(CPU =>{
 totalidletime += CPU.times.idle;
});

array.push(totalidletime); 

console.log(chalk.cyan.bold("System Info:"))
console.log( chalk.green(`Your system has ${totalcores} cores!`));
console.log('The total system idle time is' +  " " + chalk.yellowBright(totalidletime));
console.log( "Write"+ chalk.cyan(" .help ")+ "for more info");









