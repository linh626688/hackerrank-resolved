// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  let objArr = {};
  for (let i = 1; i <= n; i++) {
    objArr[i] = 0;
  }
  queries.forEach((arrQueries, idx) => {
    let startItem = arrQueries[0];
    let lastItem = arrQueries[arrQueries.length - 2];
    let step = arrQueries[arrQueries.length - 1]
    for (let i = startItem; i <= lastItem; i++) {
      objArr[i] += step;
    }
  })
  console.log(objArr);
  let max = 0;
  Object.keys(objArr).forEach(el => {
    if (objArr[el] > max) {
      max = objArr[el];
    }
  })
  return max;

}

console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]))