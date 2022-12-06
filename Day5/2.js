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

//process instructions
for (const line of lines) {
  let [,count,,source,,destination] = line.split(' ')
  stacks[parseInt(destination)] = stacks[parseInt(source)].splice(0, count).concat(stacks[parseInt(destination)])
}
console.log(Object.values(stacks).map((stack) => stack[0]).join(''))