// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let mapValue = {};
  alphabet.split('').forEach((el, idx) => {
    mapValue[el] = idx + 1;
  })
  let mapStr = {};
  let values = new Set()
  s.split('').forEach(el => {
    if (mapStr[el] !== undefined) {
      mapStr[el] += 1
      values.add(mapStr[el] * mapValue[el])
    } else {
      mapStr[el] = 1
      values.add(mapValue[el])
    }
  })
  return queries.map(el => values.has(el) ? "YES" : "NO")

}

console.log('weightedUniformStrings', weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10]))