const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

function isArray(arr) {
  return typeof arr === 'object';
}

function isArrayMatchLength(arr) {
  return arr.length === 6;
}
function isArrayDimensional(arr) {
  return arr.map(i => i.length).reduce((p, n) => p + n) === 36;
}

function hourglassSum(arr) {
  // default value returned
  let hourglasses = []; // validating the arr
  if (
    isArray(arr) && // check if is object
    isArrayMatchLength(arr) && // check that the length of the arr is 6
    isArrayDimensional(arr) //
  ) {
    for (let row = 0; row <= 3; row++) {
      for (let col = 0; col <= 3; col++) {
        let sum = 0;

        sum += arr[row][col];
        sum += arr[row][col + 1];
        sum += arr[row][col + 2]; // top of hourglass

        sum += arr[row + 1][col + 1]; // middle of hourglass
        
        sum += arr[row + 2][col];
        sum += arr[row + 2][col + 1];
        sum += arr[row + 2][col + 2]; // bottom of hourglass

        hourglasses.push(sum);
      }
    }
  }
  // default returned value
  // Math.max used to find the highest value in an array
  return hourglasses.length > 0 ? Math.max(...hourglasses) : 0;
}
hourglassSum(arr);

console.log('TCL: arr', hourglassSum(arr));
