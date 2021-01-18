function repeatedString(s, n) {

  let sArr = s.split("")
  let countOne = 0;
  let countSur = 0;
  sArr.forEach(el => {
    if (el === 'a') {
      countOne += 1;
    }
  })
  let repeated = parseInt(n / s.length);
  let surplus = n % s.length;
  if (surplus > 0) {
    for (let i = 0; i < surplus; i++) {
      if (sArr[i] === 'a') {
        countSur += 1;
      }
    }
  }
  return countOne*repeated + countSur;
}

console.log(repeatedString('aaabc', 14))