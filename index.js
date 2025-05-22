import os, { cpus } from "node:os";
import chalk from "chalk";
import { monitor, checkOS , showchart} from "./modules/index.js";

let totalcores = cpus().length;
let totalidletime = 0;

let array = []
cpus().forEach(CPU => {
    totalidletime += CPU.times.idle;
});
array.push(totalidletime);

// setInterval(monitor,1000);

console.log(chalk.cyan.bold("System Info:"));
console.log("Current system: " + " " + chalk.yellowBright(checkOS()));
console.log("Total CPU Cores: " + " " + chalk.yellowBright(totalcores));
console.log('Host Name :' + " " + chalk.yellowBright(os.hostname()))
console.log("Total Memory :" + " " + chalk.yellowBright(os.totalmem() / (1024 * 1024 * 1024).toFixed(1)) + chalk.gray("GB"));
console.log('System idle time:' + " " + chalk.yellowBright(totalidletime));
console.log("Write" + chalk.cyan(" .help ") + "for more info");



