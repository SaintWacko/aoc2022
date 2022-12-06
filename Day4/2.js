let data = require("fs").readFileSync("input", { encoding: "utf-8" }).trim();
let lines = data.split('\n').map((p) => p.split(',').map((e) => e.split('-').map((s) => parseInt(s))));
total = 0;
for (const line of lines) {
  if (line[0][0] <= line[1][0] && line[0][1] >= line[1][0] ||
      line[0][0] >= line[1][0] && line[1][1] >= line[0][0]) {
        total += 1;
      } else console.log(line)
}
console.log(total)