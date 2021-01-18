// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
  let arrInput = arr.split(" ")

  let flag = arrInput[n - 1];
  let isStop = false;
  for (let i = n - 2; i >= 0; i--) {

    if (flag < arrInput[i]) {
      arrInput[i + 1] = arrInput[i]
    } else {
      arrInput[i + 1] = flag;
      isStop = true;
    }
    console.log(arrInput.toString().replace(/,/g, " "))
    if (isStop) {
      break;
    }
  }
  if (flag < arrInput[0]) {
    console.log([flag].concat(arrInput.filter((_, idx) => idx > 0)).toString().replace(/,/g, " "))
  }
  // return out
}

function insertedArr(flag, arr) {
  let out = [...arr];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > flag) {
      out.push()
    }
  }
}

// console.log(insertionSort1(5, [2, 4, 6, 8, 3]))
// insertionSort1(10, '2 3 4 5 6 7 8 9 10 1')


function hasPair(arr, sum) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let s = arr[low] + arr[high];
    if (s === sum) {
      return true;
    }
  }
}

console.log(hasPair([1,2,4,4], 8) ? 'true': 'false')
