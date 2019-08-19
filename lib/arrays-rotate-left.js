//Solution using for-loop
let arr = [1, 2, 3, 4, 5];
let d = 4;
function rotLeft(arr, d) {
  // check if there's even something to rotate
  if (arr.length < 2) {
    return arr.slice(0); // always return a copy
  }
  // check if there's any need to rotate
  if (d === 0) {
    return arr.slice(0); // always return a copy
  }
  if (d < 0) {
    return arr.slice(d).concat(arr.slice(0, arr.length + d));
  } else {
    return arr.slice(d).concat(arr.slice(0, d));
  }
}
/** 
This code does a few simple checks to see if there's any reason to rotate the array at all.
If there is, it does by concatenating two slices (code's 𝑂(1)), 
rather than going steps number of iterations with shift and push.
And in case there's no reason to rotate anything, it just returns a copy of the input array (so that the output is always a new array, even if nothing needed to be rotated).
 */
rotateLeft(arr, d);
