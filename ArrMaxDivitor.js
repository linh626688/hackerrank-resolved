function findMaxDivisor(number) {
  let i;
  for (i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return number / i;
    }
  }
  return 1;
}

function arrMaxDivisor(arr) {
  return arr.map(el => findMaxDivisor[el])
}