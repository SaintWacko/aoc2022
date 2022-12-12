console.time();
let data = require("fs").readFileSync("input", { encoding: "utf-8" }).replace(/addx/g, '\naddx').split('\n').map((r) => r.split(' '));
let cycle = 0;
let register = 1;
let output = '';
for (instruction of data) {
  if ((cycle % 40) >= register - 1 && cycle % 40 <= register + 1) output += '#';
  else output += '.'
  cycle++;
  if (cycle % 40 == 0) {
    console.log(output);
    output = '';
  }
  if (instruction[0] == 'addx') {
    register += parseInt(instruction[1])
  }
}
console.log(output);
console.timeEnd();