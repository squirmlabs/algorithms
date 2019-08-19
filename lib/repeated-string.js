function repeatedString(s = 'aba', n = 10) {
  const min = 1;
  const maxs = 100;
  const maxn = 1000000000000;

  let as = s.split('').filter(l => l === 'a').length;

  if (
    typeof s === 'string' &&
    s.length >= min &&
    s.length <= maxs &&
    n === parseInt(n, 0) &&
    n >= min &&
    n <= maxn
  ) {
    as =
      parseInt(n / s.length, 0) * s.split('').filter(i => i === 'a').length +
      s
        .slice(0, n % s.length)
        .split('')
        .filter(i => i === 'a').length;
  }
  return as;
}
repeatedString();
