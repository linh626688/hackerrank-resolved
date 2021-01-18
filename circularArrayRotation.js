function circularArrayRotation(a, k, queries) {
  let countMove = 0;
  if (k < a.length) {
    countMove = k;
  } else {
    countMove = k % a.length;
  }

  let movedArr = []
  for (let i = 0; i < a.length; i++) {
    if (i + countMove < a.length) {
      movedArr[i + countMove] = a[i];
    } else {
      movedArr[Math.abs(a.length - (i + countMove))] = a[i];
    }
  }
  return queries.map(el => movedArr[el])

}

console.log(circularArrayRotation([1, 4, 5], 1, [1, 2, 5]))