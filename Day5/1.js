let data = require("fs").readFileSync("input", { encoding: "utf-8" });
let [start, lines] = data.split('\n\n').map((e) => e.split('\n'));

//construct initial stacks
let stacks = {};
for (let row of start) {
  row = row.slice(1)
  let index = 0;
  do {
    const crate = row[index * 4]
    if (crate.match(/[A-Z]/)) {
      if (stacks[index + 1]) stacks[index + 1].push(crate)
      else stacks[index + 1] = [crate]
    }
    index += 1;
  } while (index * 4 < row.length)
}
for (key of Object.keys(stacks)) stacks[key] = stacks[key].reverse()

//process instructions
for (const line of lines) {
  let [,count,,source,,destination] = line.split(' ')
  for (let i = 0; i < count; i++) {
    stacks[parseInt(destination)].push(stacks[parseInt(source)].pop())
  }
}
console.log(Object.values(stacks).map((stack) => stack.at(-1)).join(''))