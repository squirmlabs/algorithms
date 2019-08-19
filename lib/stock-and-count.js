/**
 * Couple of possible solutions to the Sock Merchant challenge on Hacker Rank
 * https://www.hackerrank.com/challenges/sock-merchant/problem
 **/

// Solution 1

function sortAndCount(n, arr) {
  let sorted = arr.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      i += 1;
    }
  }

  return pairs;
}

// Solution 2

function stockAndCount(n, arr) {
  let pairs = 0;
  const types = arr.reduce((acc, val) => {
    !!acc[val] ? (acc[val] += 1) : (acc[val] = 1);
    return acc;
  }, {});

  console.log('TCL: types', types);

  Object.keys(types).forEach(amt => {
    let _pair = parseInt(types[amt] / 2);
    
    if (_pair >= 1) pairs += _pair;
  });

  return pairs;
}

const n = 9;
const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.clear();

console.group('Sorted and counted');
console.log(`There is a total of ${sortAndCount(n, socks)} pairs`);
console.groupEnd();

console.group('Stocked and counted');
console.log(`There is a total of ${stockAndCount(n, socks)} pairs`);
console.groupEnd();
