let data = require("fs").readFileSync("input", { encoding: "utf-8" }).split('\n').map((r) => r.split(''));
data = data.slice(1, -1).map((r) => r.slice(1, -1))
let scenic = Array(data[0].length).fill().map(() => Array(data.length).fill(0));
for (const [iy, row] of data.entries()) {
  for (const [ix, tree] of row.entries()) {
    left = ix == 0 ? 1 : (row.slice(0, ix).reverse().findIndex((e) => e >= tree) + 1) || ix + 1
    right = ix == row.length - 1 ? 1 : (row.slice(ix + 1).findIndex((e) => e >= tree) + 1) || row.length - ix
    up = iy == 0 ? 1 : (data.slice(0, iy).map((r) => r[ix]).reverse().findIndex((e) => e >= tree) + 1) || iy + 1
    down = iy == data.length - 1 ? 1 : (data.slice(iy + 1).map((r) => r[ix]).findIndex((e) => e >= tree) + 1) || data.length - iy
    scenic[iy][ix] = left * right * up * down;
  }
}
console.log(Math.max(...scenic.reduce(function(a,b) { return a.concat(b) })))