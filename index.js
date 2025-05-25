import * as readline from "node:readline/promises";
import { stdin, stdout } from "process";
import os, { cpus } from "node:os";
import chalk from "chalk";
import { checkOS, showchart, showOptions , chartInput } from "./modules/index.js";

let totalcores = cpus().length;
let totalidletime = 0;

let array = []
cpus().forEach(CPU => {
  totalidletime += CPU.times.idle;
});
array.push(totalidletime);

console.log(chalk.cyan.bold("System Info:"));
console.log("Current system: " + " " + chalk.yellowBright(checkOS()));
console.log("Total CPU Cores: " + " " + chalk.yellowBright(totalcores));
console.log('Host Name :' + " " + chalk.yellowBright(os.hostname()))
console.log("Total Memory :" + " " + chalk.yellowBright(os.totalmem() / (1024 * 1024 * 1024).toFixed(1)) + chalk.gray("GB"));
console.log('System idle time:' + " " + chalk.yellowBright(totalidletime));
console.log("write help for more..")


const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
     


rl.on("line", (line) => {
      switch (line) {
      case "help":
      showOptions();
      break;
      case "m":
      chartInput();
      break;
      case "g":
      console.log("Graph is in building process.....");
      break;
      case "c":
      console.log("cofee is loading .......");
      break;
      case "e":
      console.log( chalk.green("Exiting...."))
      rl.close();
      default:
      console.log( chalk.redBright("Invalid Input"));
      showOptions();
  }
})


