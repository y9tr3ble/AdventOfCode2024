const fs = require('node:fs');
const path = 'day1/input.txt';

const text = fs.readFileSync(path, "utf8");

const lines = text.split("\n");

const leftSide: number[] = [];
const rightSide: number[] = [];

lines.forEach((line) => {
  const parts = line.split(" ");

  const lineNumber = parseInt(parts[0]);
  const rowNumber = parseInt(parts[parts.length - 1]);

  if (isNaN(lineNumber)) {
    return;
  }

  leftSide.push(lineNumber);
  rightSide.push(rowNumber);
});

leftSide.sort();
rightSide.sort();

const diffs = leftSide.map((leftNum, i) => {
  const rightNum = rightSide[i];
  const diff = Math.abs(leftNum - rightNum);
  return diff;
});

const sum = diffs.reduce((curr, total) => {
  return curr + total;
}, 0);

console.log(`Size = ${sum}`);
