import os, { cpus } from "node:os";
// import asciichart from "asciichart";
import * as readline from "node:readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

export function checkOS() {
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

export function monitor() {
    let oldCPU = os.cpus();
    setTimeout(() => {
        let newCPUS = os.cpus();
        const usage = newCPUS.map((core, i) => {
            return {
                core: i,
                usage: calculate(oldCPU[i], newCPUS[i])
            }
        });
        console.clear();
        console.table(usage);
     
            function calculate(oldCPU, newCPUS) {

            const Oldtime = Object.values(oldCPU.times).reduce((a, b) => a + b)
            const Newtime = Object.values(newCPUS.times).reduce((a, b) => a + b)

            const idle = oldCPU.times.idle - newCPUS.times.idle;
            const total = Oldtime - Newtime;

            const used = total - idle;

            return ((used * 100) / total).toFixed(1)
        };
    }, 1000);
}

export function showchart(){
     let oldCPU = os.cpus();
     setTimeout(()=>{
     let newCPUS = os.cpus();
     let chart = os.cpus.map((core,i)=>{
     let usage = parseFloat(calculate(oldCPU[i], newCPUS[i]));
     const block = Math.round(usage/10);
     const bar = "█".repeat(block).padEnd(10, "░");;
     return `Core ${i}: ${chalk.green(bar)} ${percent.toFixed(1)}%`;
     });
    chart.forEach(line => console.log(line));
     },1000);

          function calculate(oldCPU, newCPUS) {

            const Oldtime = Object.values(oldCPU.times).reduce((a, b) => a + b)
            const Newtime = Object.values(newCPUS.times).reduce((a, b) => a + b)

            const idle = oldCPU.times.idle - newCPUS.times.idle;
            const total = Oldtime - Newtime;

            const used = total - idle;

            return ((used * 100) / total).toFixed(1)
        };
}

let options = [
    'Press m : see per core usage table' ,
    'Press g : see per core usage Chart' ,
    'Press c : Just gimme cofee' ,
    'Press e : Exit' ,
];

export function showOptions(){
     options.forEach(Option=>{
     console.log(Option);
  })
}

export async function chartInput (){
    const userInput = await rl.question( "How many seconds you want to see table? \n");
    if(isNaN(userInput)) {
    console.log("Enter a valid number..");
    question();
} 
let count = 0;
const interval = setInterval(() => {
    count ++;
    monitor();
     if(count >= userInput){
     clearInterval(interval);
     showOptions();
    }
}, 1000);
}