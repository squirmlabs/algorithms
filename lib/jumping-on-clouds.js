function jumpingOnClouds(c) {
  let csplit = String(c).split(',');

  for (let i = 0; i < csplit.length; i++) {
    if (csplit[i] == 0) {
      csplit[i] = i;
    } else {
      csplit[i] = false;
    }
  }

  for (let i = 0; i < csplit.length; i++) {
    if (csplit[i] === false) {
      csplit.splice(i, 1);
    }

    if (csplit[i] + 2 == csplit[i + 2]) {
      csplit.splice(i + 1, 1);
    }
  }

  return csplit.length - 1;
}
console.log('TCL: jumpingOnClouds()', jumpingOnClouds());
