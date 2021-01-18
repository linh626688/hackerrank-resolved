function countSale(p, d, m, s) {
  if (p > s) {
    return 0;
  }
  if (p === s) {
    return 1;
  }
  let listPriceSale = [p];
  let temp = p;

  while (m < (temp - d)) {
    temp = temp - d
    listPriceSale.push(temp);
  }
  listPriceSale.push(m)
  let count = 0;

  while (s >= m) {
    s -= listPriceSale[count] ? listPriceSale[count] : listPriceSale[listPriceSale.length - 1]
    count++;
  }
  return count;
}

// console.log('countSale', countSale(20, 3, 6, 85))
// console.log('countSale', countSale(100, 19, 1, 180))

//100 19 1 180

function func2(p, d, m, s) {
  if (p > s) {
    return 0;
  }
  if (p === s) {
    return 1;
  }
  let count = 0;
  let sum = p;

  while (s >= sum && sum >= m && ((p - count * d) >= m)) {
    sum = p * (count + 1) - d * (1 + count) * count / 2;
    // sum = p * count - d * count
    count++;
  }
  return count;
}

console.log('countSale', func2(100, 19, 1, 180))
// console.log('countSale', func2(20, 3, 6, 80))
