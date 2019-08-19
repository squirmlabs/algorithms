function findPaths(c = [0, 0, 0, 0, 1, 0], paths = []) {
  if (c.length > 1) {
    // making copies of the path
    let path1 = paths.slice();
    let path2 = paths.slice();

    // check path1 where we iterate over c by a jump of 1
    // check if c[1] is 1, quickly invalidate path1
    // or add 1 to the path1
    path1 = c[1] !== 1 ? [...path1, 1] : 0;

    // and we do the same for path 2 for a jump of 2
    path2 = c[2] !== 1 ? [...path2, 2] : 0; // quickly invalidating that we can't continue with
    // a jump of 1 or 2
    if (path1 === 0 && path2 === 0) {
      paths = 0; // jump to end of function
    } else if (path1 !== 0 && path2 === 0) {
      // Path 1 still good

      return findPaths(c.slice(1), path1);
    } else if (path1 === 0 && path2 !== 0) {
      // Path 2 still good

      return findPaths(c.slice(2), path2);
    } else if (path1 !== 0 && path2 !== 0) {
      path1 = findPaths(c.slice(1), path1);
      path2 = findPaths(c.slice(2), path2);

      // compare and return the shortest path
      return path1.length < path2.length ? path1 : path2;
    }
  }
  // return the paths that were sent to us
  return paths;
}
function jumpingOnClouds(c = [0, 0, 0, 0, 1, 0]) {
  const min = 2;
  const max = 100;
  let jumps = 0;
  const cloudsCount = c.length; // n = number of clouds;

  // Knowing that Emma can only jump 1 or 2 spaces we need to find a way to traverse the array and keep track of the different paths.
  if (c.length >= min && c.length <= max) {
    // let path1 = [];
    // for (let idx = 0; idx < c.length; idx++) {
    //   if (c[idx] !== 1) {
    //     path1.push('jump'); // a jump by one
    //   } else {
    //     path1.push('dead');
    //     break;
    //   }
    // }

    // console.log('TCL: jumpingOnClouds -> path1', path1);
    jumps = findPaths(c, []);
  } // return jumps
  return typeof jumps === 'number' ? jumps : jumps.length;
}

jumpingOnClouds();
