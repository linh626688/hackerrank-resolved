function utopianTree(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum = sum * 2;
    } else {
      sum = sum + 1;
    }
    console.log('sum', sum)
  }
  return sum;

}
function angryProfessor(k, a) {
  let count = 0;
  for( let i =0; i < a.length; i++) {
    if(a[i] <= 0){
      count++;
    }
  }
  if( k >= count) {
    return  'YES';
  }else {
    return 'NO';
  }

}

console.log(angryProfessor(3,[-1, -3 ,4 ,2]))