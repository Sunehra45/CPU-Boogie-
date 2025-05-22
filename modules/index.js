import os, { cpus } from "node:os";
import asciichart from "asciichart";

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

// export function showchart(){
//      let oldCPU = os.cpus();
//      setTimeout(()=>{
//      let newCPUS = os.cpus();
//      let chart = os.cpus.map((core,i)=>{
//      let usage = parseFloat(calculate(oldCPU[i], newCPUS[i]));
//      const block = Math.round(usage/10);
//      const bar = "█".repeat(block).padEnd(10, "░");;
//      return `Core ${i}: ${chalk.green(bar)} ${percent.toFixed(1)}%`;
//      });
//     chart.forEach(line => console.log(line));
//      },1000);

//           function calculate(oldCPU, newCPUS) {

//             const Oldtime = Object.values(oldCPU.times).reduce((a, b) => a + b)
//             const Newtime = Object.values(newCPUS.times).reduce((a, b) => a + b)

//             const idle = oldCPU.times.idle - newCPUS.times.idle;
//             const total = Oldtime - Newtime;

//             const used = total - idle;

//             return ((used * 100) / total).toFixed(1)
//         };
// }