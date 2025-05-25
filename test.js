import os from "node:os"

function monitor() {
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
monitor()
/*
PS C:\Users\pk\Documents\GitHub\CPU-Boogie-> node .\index.js
System Info:
┌─────────┬──────┬────────┐
│ (index) │ core │ usage  │
├─────────┼──────┼────────┤
│ 0       │ 0    │ '9.5'  │
│ 1       │ 1    │ '4.6'  │
│ 2       │ 2    │ '6.2'  │
│ 3       │ 3    │ '12.6' │
└─────────┴──────┴────────┘
PS C:\Users\pk\Documents\GitHub\CPU-Boogie-> node .\index.js
