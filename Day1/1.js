let data = require("fs").readFileSync("input", { encoding: "utf-8" }).trim();
let lines = data.split('\n');
let greatest = 0;
let elf = 0;
for (line of lines) {
  if (line === '') {
    greatest = Math.max(greatest, elf);
    elf = 0;
  } else {
    elf += parseInt(line);
  }
}
console.log(greatest);