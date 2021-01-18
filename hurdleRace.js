function hurdleRace(k, height) {

  let max = findMax(height);
  if (k > max) {
    return 0;
  }
  return max - k;

}
function findMax(arr) {
  let max = arr[0];
  arr.forEach(el => {
    if (el > max) {
      max = el;
    }
  });
  return max;

}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]))