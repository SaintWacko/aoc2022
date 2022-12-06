let data = require("fs").readFileSync("input", { encoding: "utf-8" }).trim();
let lines = data.split('\n');
let total = 0;
for (const line of lines) {
  const c1 = line.substring(0, line.length / 2)
  const c2 = line.substring(line.length / 2)
  const shared = c1.split('').filter((e) => c2.includes(e))[0]
  let priority;
  if (shared === shared.toLowerCase()) priority = shared[0].charCodeAt(0) - 96
  else priority = shared[0].charCodeAt(0) - 38
  total += priority
}
console.log(total)