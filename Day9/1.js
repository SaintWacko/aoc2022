console.time()
let data = require("fs").readFileSync("input", { encoding: "utf-8" }).split('\n').map((r) => r.split(' '));
head = [0, 0]; //y, x
tail = [0, 0];
visited = new Set([[0, 0]])
path = []
const move = (direction) => {
  path.push([...head])
  switch (direction) {
    case 'U':
      head[0] = head[0] + 1
      break;
    case 'D':
      head[0] = head[0] - 1
      break;
    case 'R':
      head[1] = head[1] + 1
      break;
    case 'L':
      head[1] = head[1] - 1
      break;
    default:
  }
  if ((Math.abs(head[0] - tail[0]) > 1) || (Math.abs(head[1] - tail[1]) > 1)) {
    tail = [...path.at(-1)]
    visited.add(tail.join())
  }
}
for (line of data) {
  for (let loop = 0; loop < parseInt(line[1]); loop++) {
    move(line[0])
  }
}
console.log(visited.size)
console.timeEnd()