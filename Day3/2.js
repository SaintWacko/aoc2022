let data = require("fs").readFileSync("input", { encoding: "utf-8" }).trim();
let lines = data.split('\n');
let total = 0;
let index = 0;
do {
  const sack1 = lines[index]
  const sack2 = lines[index + 1]
  const sack3 = lines[index + 2]
  const shared = sack1.split('').filter((e) => sack2.includes(e) && sack3.includes(e))[0]
  console.log(shared)
  let priority;
  if (shared === shared.toLowerCase()) priority = shared[0].charCodeAt(0) - 96
  else priority = shared[0].charCodeAt(0) - 38
  total += priority
  index += 3
} while (index < lines.length)
console.log(total)