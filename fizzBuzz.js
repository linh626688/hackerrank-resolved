function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    let divTo3 = i % 3;
    let divTo5 = i % 5;
    let output = i;
    if (divTo3 === 0) {
      output = 'Fizz'
    }
    if (divTo5 === 0) {
      output = 'Buzz'
    }

    if (divTo3 === 0 && divTo5 === 0) {
      output = 'FizzBuzz'
    }

    console.log(output)
  }

}

console.log(fizzBuzz(7))