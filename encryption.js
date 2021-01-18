function encryption(s) {
  let cols = Math.ceil(Math.sqrt(s.length))
  let rows = Math.round(Math.sqrt(s.length))
  let matrix = convertToMatrix(s.split(""), cols)
  return encodeMatrix(matrix, rows, cols,)
}

function convertToMatrix(arr, cols) {
  return arr.reduce((rows, key, index) => (index % cols === 0 ? rows.push([key])
    : rows[rows.length - 1].push(key)) && rows, []);
}

function encodeMatrix(matrix, rows, cols) {
  let output = '';
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (matrix[j]) {
        if (matrix[j][i]) {
          output += matrix[j][i];
        }
        if (j === rows - 1) {
          output += ' ';
        }
      }
    }
  }
  return output;
}

// console.log(encryption('feedthedog'));
console.log(encryption('haveaniceday'));
// console.log(convertToMatrix([1, 2, 3, 4, 4, 5, 6, 7, 8, 9], 4));


