//Hecho por: David Gerardo Menjivar Ramirez WD-4 KODIGO

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
 let valleys = 0;
  let elevation = 0;
  let isValley = false;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      elevation++;
    } else if (path[i] === 'D') {
      elevation--;
    }

    if (elevation < 0 && !isValley) {
      isValley = true;
    } else if (elevation >= 0 && isValley) {
      valleys++;
      isValley = false;
    }
  }

  return valleys;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
