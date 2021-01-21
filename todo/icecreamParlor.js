// Complete the icecreamParlor function below.
function icecreamParlor(m, arr) {

  let output = [];
  let mapInput = {};
  let arrSorted = arr.sort((a, b) => a - b);

  let setArr = new Set(arr);
  arr.forEach((el, idx) => {
    mapInput[idx] = el
  })

  for (let i = 0; i < arrSorted.length; i++) {
    let second = m - arrSorted[i];
    if (!setArr.has(second)) {
      setArr.add(arrSorted[i])
    } else {
      output.push(mapInput[arrSorted[i]] + 1);
      output.push(mapInput[second] + 1);
      break;
    }
  }
  return output.reverse();
}

console.log(icecreamParlor(4, [2, 2, 4, 3]))
console.log(icecreamParlor(4, [1, 2, 4, 3]))
// console.log(icecreamParlor(9, [1, 3, 4, 6, 7, 9]))
// console.log(icecreamParlor(8, [1, 6, 4, 4, 3, 8]))
