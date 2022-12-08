let data = require("fs").readFileSync("input", { encoding: "utf-8" }).split('\n').map((r) => r.split(''));
let visible = Array(data[0].length).fill().map(() => Array(data.length).fill(0));

const scanRows = (input) => {
  for (const [iy, row] of input.entries()) {
    let max = -1;
    for (const [ix, tree] of row.entries()) {
      if (tree > max){
        visible[iy][ix] = 1
        max = tree
      }
    }
    max = -1;
    for (let ix = row.length - 1; ix >= 0;  ix--) {
      tree = row[ix]
      if (tree > max){
        visible[iy][ix] = 1
        max = tree
      }
    }
  }
}
const rotateRight = (input) => input[0].map((val, index) => input.map(row => row[index]).reverse())
const sumArray = (input) => {
  return input.reduce(function(a,b) { return a.concat(b) })
      .reduce(function(a,b) { return a + b });
}

scanRows(data)
data = rotateRight(data)
visible = rotateRight(visible)
scanRows(data)
console.log(sumArray(visible))
