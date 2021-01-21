function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong

  let lowercase = /.*[a-z]+.*/;
  let uppercase = ".*[A-Z]+.*";
  let num = ".*[0-9]+.*";
  let specialchar = ".*[-!@#$%^&*()+]+.*";

  let count = 0;

  if (!password.match(lowercase)) {
    count++
  }
  if (!password.match(uppercase)) {
    count++
  }
  if (!password.match(num)) {
    count++
  }
  if (!password.match(specialchar)) {
    count++
  }

  if (n + count >= 6) {
    return count;
  } else {
    return 6 - n;
  }
}


console.log(minimumNumber(5, 'E!%Z@'))