import { cpus } from "node:os";

let totalcores = cpus().length ;
let totalidletime = 0 ;
let array = []
cpus().forEach(CPU =>{
 totalidletime += CPU.times.idle;
 array.push(totalidletime)
});

const data = cpus().map((cpu, index) => ({
    Core: index,
    Idle: cpu.times.idle
  }));

 setInterval(() => {
        console.table(array); 
  }, 3000);







