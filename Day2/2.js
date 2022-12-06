const shapes = {
  A: 1,
  B: 2,
  C: 3,
};
const order = ['A', 'B', 'C']

const outcomes = {
  Y: 0,
  X: 2,
  Z: 1,
}
const outcomeScores = {
  Y: 3,
  X: 0,
  Z: 6,
}

let score = 0;
let data = require("fs").readFileSync("input", { encoding: "utf-8" }).trim();
let lines = data.split('\n');
for (const line of lines) {
  let opponent;
  let outcome;
  [opponent, outcome] = line.split(' ');
  const you = order[(shapes[opponent] - 1 + outcomes[outcome]) % 3]
  score += outcomeScores[outcome]
  score += shapes[you]
}
console.log(score)