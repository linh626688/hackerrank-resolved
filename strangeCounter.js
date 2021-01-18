function strangeCounter(t) {
  const n = Math.log2((t + 2) / 3)
  return 3 * Math.pow(2, Math.round(n) + 1) - t - 2;

}

console.log(strangeCounter(6))