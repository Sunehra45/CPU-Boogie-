// // import asciichart from "asciichart";
// import chart from "cli-chart";

// var CHART = new Array (50)  // The width of chart depends the lenght of array - experiment by changing width
// for (var i = 0; i < CHART.length; i++)
//     CHART[i] = 15 * Math.sin (i * ((Math.PI * 4) / CHART.length))
// // console.log (asciichart.plot (CHART));

// let mychart = new chart(
//     {
//     xlablel : "experimenting",
//     ylabel : "dopamine increasing",
//     direction: "y" ,                                          //most probably direction of chart 
//     width: 90,
//     height: 30,
//     lmargin: 15,
//     step: 4
//     }
// )

// mychart.addBar(5, 'red');
// mychart.addBar(10).addBar(24).addBar(15, 'white').addBar(16);
// mychart.draw();    

import os from "node:os";
import chalk from "chalk";

// Assuming you already have oldCPU and newCPU from polling
const oldCPU = os.cpus();
// Simulate a short delay before taking second reading
setInterval(() => {
  const newCPU = os.cpus();

  const usage = newCPU.map((core, i) => {
    const percent = parseFloat(calculate(oldCPU[i], newCPU[i]));
    const blocks = Math.round(percent / 10); // Max 10 blocks for 100%
    const bar = "█".repeat(blocks).padEnd(10, "░"); // pad with '░' for visual contrast

    return `Core ${i}: ${chalk.green(bar)} ${percent.toFixed(1)}%`;
  });

  usage.forEach(line => console.log(line));
}, 1000); // Delay to allow CPU usage difference

  function calculate(oldCPU, newCPUS) {

            const Oldtime = Object.values(oldCPU.times).reduce((a, b) => a + b)
            const Newtime = Object.values(newCPUS.times).reduce((a, b) => a + b)

            const idle = oldCPU.times.idle - newCPUS.times.idle;
            const total = Oldtime - Newtime;

            const used = total - idle;

            return ((used * 100) / total).toFixed(1)
        };