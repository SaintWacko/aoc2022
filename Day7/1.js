class Node {
  constructor(name, size, parent) {
    this.name = name;
    this.size = parseInt(size);
    this.parent = parent;
    this.children = [];
  }

  searchChildren = (name) => {
    for (child of this.children) {
      if (child.name == name) return child
    }
    return null;
  }

  getSize = () => {
    let size = this.size;
    for (child of this.children) {
      size += child.getSize()
    }
    return size;
  }
}

let data = require("fs").readFileSync("input", { encoding: "utf-8" }).split('\n').slice(1);

let nodes = [];
current = new Node('/', 0, null);
nodes.push(current)
for (let line of data) {
  line = line.split(' ');
  if (line[0] == '$') {
    if (line[1] == 'cd') {
      if (line[2] == '..') {
        current = current.parent
      } else {
        child = current?.searchChildren(line[2])
        current = child
        // if (child) current = child
        // else current = new Node(line[2], 0, current)
      }
    }
  } else {
    if (line[0] == 'dir') {
      child = new Node(line[1], 0, current)
      nodes.push(child)
      current.children.push(child)
    } else {
      child = new Node(line[1], line[0], current)
      nodes.push(child)
      current.children.push(child)
    }
  }
}
totalSize = 0;
for (node of nodes) {
  if (node.children.length) {
    size = node.getSize();
    if (size < 100000) totalSize += size;
  }
}
console.log(totalSize)