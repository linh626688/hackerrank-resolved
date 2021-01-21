function pangrams(s) {
  let setStr = new Set(s.toLocaleLowerCase().split(''))
  return setStr.size > 26 ? 'pangrams' : 'not pangrams';
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))