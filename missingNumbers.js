function missingNumbers(arr, brr) {
  let objArr = {};
  let objBrr = {};
  arr.forEach(el => {
    if (objArr[el] !== undefined) {
      objArr[el] += 1;
    } else {
      objArr[el] = 0;
    }
  })
  brr.forEach(el => {
    if (objBrr[el] !== undefined) {
      objBrr[el] += 1;
    } else {
      objBrr[el] = 0;
    }
  })

  let set = new Set();
  brr.forEach(el => {
      if (objArr[el] === undefined) {
        set.add(el)
      }
      if (objArr[el] !== undefined && objArr[el] !== objBrr[el]) {
        set.add(el)
      }
    }
  )
  return Array.from(set).sort((a, b) => a - b)
}

console.log(missingNumbers(
  [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
  [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204, 200])
)