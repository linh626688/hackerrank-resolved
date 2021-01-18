const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
  const listH = h.split(" ");
  const listCha = alphabet.split("");
  const wordLengths = [];

  const obj = {};
  for (let i = 0; i < listH.length; i++) {
    obj[listCha[i]] = listH[i];
  }

  const words = word.split('').map(el => obj[el]);
  console.log(words);
  let maxHeight = words[0];

  words.forEach(el => {
    if (el > maxHeight) {
      maxHeight = el;
    }
  })
  return maxHeight * words.length;


}


console.log(designerPdfViewer("1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7", 'zaba'))