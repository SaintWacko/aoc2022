console.time()
let data = require("fs").readFileSync("input", { encoding: "utf-8" }).split('\n').map((r) => r.split(' '));
knots = [];
for (key in [...Array(10).keys()]) {
  knots.push([0, 0])
}
visited = new Set(['0,0'])
const move = (direction) => {
  switch (direction) {
    case 'U':
      knots[0][0] = knots[0][0] + 1
      break;
    case 'D':
      knots[0][0] = knots[0][0] - 1
      break;
    case 'R':
      knots[0][1] = knots[0][1] + 1
      break;
    case 'L':
      knots[0][1] = knots[0][1] - 1
      break;
    default:
  }
  for (i = 0; i < knots.length - 1; i++) { // for each knot
    diffY = knots[i][0] - knots[i+1][0] // get the distance between current knot
    diffX = knots[i][1] - knots[i+1][1] // and the next knot on the rope
    if ((Math.abs(diffY) > 1) || (Math.abs(diffX) > 1)) { // if they're not adjacent
      knots[i+1] = [ // move the trailing knot one space towards the leading knot
        knots[i+1][0] + ((diffY / Math.abs(diffY)) || 0),
        knots[i+1][1] + ((diffX / Math.abs(diffX)) || 0)
      ]
      if (i == knots.length - 2) visited.add(knots[i+1].join())
    }
  }
}
for (line of data) {
  for (let loop = 0; loop < parseInt(line[1]); loop++) {
    move(line[0])
  }
}
console.log(visited.size)
console.timeEnd()