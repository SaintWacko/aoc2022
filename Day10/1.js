console.time()
let data = require("fs").readFileSync("input", { encoding: "utf-8" }).split('\n').map((r) => r.split(' '));
let cycle = 0;
let outputCycle = 20;
let register = 1;
let total = 0;
for (instruction of data) {
  if (instruction[0] == 'addx') {
    cycle += 2;
    if (cycle >= outputCycle) {
      total += register * outputCycle;
      outputCycle += 40;
    }
    register += parseInt(instruction[1])
  } else cycle++;
}
console.log(total)
console.timeEnd()