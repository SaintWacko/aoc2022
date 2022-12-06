const outcome = (opponent, you) => {
  if (opponent === you) return 3;
  const wincons = {
    B: 'A',
    A: 'C',
    C: 'B',
  };
  if (wincons[you] === opponent) return 6;
  return 0;
}
const shapes = {
  A: 1,
  B: 2,
  C: 3,
};

let score = 0;
let data = require("fs").readFileSync("input", { encoding: "utf-8" }).trim();
data = data.replace(/X/g, 'A').replace(/Y/g, 'B').replace(/Z/g, 'C');
console.log(data)
let lines = data.split('\n');
for (const line of lines) {
  let opponent;
  let you;
  [opponent, you] = line.split(' ');
  score += shapes[you]
  score += outcome(opponent, you)
}
console.log(score)