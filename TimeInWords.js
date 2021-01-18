function timeInWords(h, m) {
  let oClock = 'o\' clock';
  const numberMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "night",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
  }
  const quarter = 'quarter';
  const half = 'half';
  const past = 'past';
  const to = 'to';
  const minute = 'minute';
  const minutes = 'minutes';

  if (m === 0) {
    return numberMap[h] + " " + oClock
  }
  if (m === 15) {
    return quarter + ' ' + past + ' ' + numberMap[h]
  }
  if (m > 0 && m < 30 && m !== 15) {
    return numberMap[m] + ' ' + (m === 1 ? minute : minutes) + ' ' + past + ' ' + numberMap[h]

  }


  if (m === 30) {
    return half + ' ' + past + ' ' + numberMap[h]
  }
  if (m > 30 && m < 45) {
    let countMinute = 60 - m;
    return numberMap[countMinute] + ' ' + minutes + ' ' + to + ' ' + numberMap[h]

  }
  if (m === 45) {
    return quarter + ' ' + to + ' ' + (numberMap[h + 1] ? numberMap[h + 1] : numberMap[1])
  }
  if (m > 45 && m < 60) {
    let leftMinutes = 60 - m;

    return numberMap[leftMinutes] + ' ' + minutes + ' ' + to + ' ' + (numberMap[h + 1] ? numberMap[h + 1] : numberMap[1])
  }
}

console.log('timeInWord', timeInWords(6, 35))