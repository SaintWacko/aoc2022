const sum = (arr) => arr .reduce((a, b) => a + parseInt(b), 0)

let data = require("fs").readFileSync("input", { encoding: "utf-8" }).trim();
let elves = data.split('\n\n')
elves = elves.map((elf) => sum(elf.split('\n')))
elves = elves.sort(function(a,b){return a - b})
console.log(sum(elves.slice(-3)))