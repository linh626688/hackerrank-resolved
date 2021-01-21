function pairs(k, arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let count = 0;
  let setArr = new Set(arr);
  for (let i = 0; i < sortedArr.length; i++) {
    let sum = sortedArr[i] + k;
    if (setArr.has(sum)) {
      count += 1;
    }
  }
  console.log(sortedArr)
  console.log('setArr', setArr)
  console.log('count', count)
  return count;
}

console.log(pairs(2, [1, 5, 3, 4, 2]))