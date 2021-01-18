function quickSort(arr) {
  let pivot = arr[0];
  let left = []
  let middle = [pivot]
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    }
    if (pivot === arr[i]) {
      middle.push(arr[i]);
    }
    if (pivot < arr[i]) {
      right.push(arr[i]);
    }
  }
  return [...left, ...middle, ...right]
}

console.log(quickSort([4, 5, 3, 7, 2]))