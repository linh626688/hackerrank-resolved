function taumBday(b, w, bc, wc, z) {
  // Write your code here
  let diff = bc - wc;
  if (Math.abs(diff)
    <= z) {
    return bc * b + wc * w;
  } else {
    if (diff > 0) {
      return b * wc + w * wc + z * b;
    } else {
      return b * bc + w * bc + z * w;
    }
  }

}

// console.log('taumBday', taumBday(10, 10, 1, 1, 1))
// console.log('taumBday', taumBday(3, 3, 1, 9, 2))
// console.log('taumBday', taumBday(5,9,2,3,4))

console.log('taumBday', taumBday(443463982, 833847400, 429734889, 628664883, 610875522))
// 443463982 833847400
// 429734889 628664883 610875522