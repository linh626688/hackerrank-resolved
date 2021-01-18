function equalizeArray(arr) {
  let obj = {}
  arr.forEach(el => {
    if (obj[el] !== undefined) {
      obj[el] = obj[el] + 1;
    } else {
      obj[el] = 1;
    }
  })
  let max = obj[arr[0]];
  Object.keys(obj).forEach(el => {
    if (max < obj[el]) {
      max = obj[el];
    }
  })
  console.log('max', max)
  return arr.length - max;
}

console.log(equalizeArray([3, 3, 2, 1, 3]))