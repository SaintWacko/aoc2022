let data = require("fs").readFileSync("input", { encoding: "utf-8" }).split('');
let test = [];
let index = 0;
do {
  const char = data[index]
  if (test.includes(char)) {
    test.splice(0, test.indexOf(char) + 1)
    test.push(char)
  } else {
    test.push(char)
    if (test.length === 4){
      console.log(index + 1)
      break;
    }
  }
  index += 1
} while (index < data.length)