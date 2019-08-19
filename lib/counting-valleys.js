// U = down a level up, start of mountain
// D = down a level deep , start of valley

// Complete the countingValleys function below.
function countingValleys(n, s) {
  const min = 2;
  const max = 1000000;
  let valleys = 0;
  let isInValley = false;
  s = typeof s === 'string' ? s.split('') : s;

  if (
    s.length >= min &&
    s.length <= max &&
    n === parseInt(n, 0) &&
    n >= min &&
    n <= max &&
    n === s.length
  ) {
    s = s
      .map(steps => (steps === 'U' ? 1 : -1))
      .reduce((acc, cur) => {
        if (acc < 0 && !isInValley) {
          isInValley = true;
        }
        if (acc + cur === 0 && isInValley) {
          valleys++;
          isInValley = false;
        }
        return acc + cur;
      }, 0);
    return valleys;
  }
}

function main() {
  const n = 8;
  const s = 'UDDDUDUU';
  let result = countingValleys(n, s);
  const n2 = 11;
  const s2 = 'UDDDDUDUUDU';
  let result2 = countingValleys(n2, s2);
  console.log('TCL: main -> result2', result2);
  console.log('TCL: main -> result', result);
}

main();
