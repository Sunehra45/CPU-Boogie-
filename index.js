import os from "node:os";
import chalk from "chalk";
import { cpus } from "node:os";

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


console.log(chalk.cyan.bold("System Info:"));
console.log("Current system : " + chalk.yellowBright(checkOS()));
console.log("Total CPU Cores : " + chalk.yellowBright(totalcores));
console.log('Total system idle time is' + " " + chalk.yellowBright(totalidletime));
console.log("Write" + chalk.cyan(" .help ") + "for more info");


