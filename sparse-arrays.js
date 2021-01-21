// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
  let mapStr = {};
  queries.forEach(el => {
    mapStr[el] = 0;
  })
  strings.forEach(str => {
    if (mapStr[str] !== undefined) {
      mapStr[str] += 1;
    }
  })
  // console.log('mapStr', mapStr)

  return Object.keys(mapStr).map(el => mapStr[el])

}

console.log(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh']))
function main(input) {
    //Enter your code here
    var data = input.split('\n');
    var firstLine = data[0].split(' ');
    var len = firstLine[0];
    //process.stdout.write('length:'+len);
    var toFind = firstLine[1];
    //process.stdout.write('toFind:'+toFind);
    //process.stdout.write('\n');
    var arr = data[1].split(' ');
    //process.stdout.write(arr);
    for(var i=len-1;i>=0;i--) {
        if(arr[i] == toFind){
            process.stdout.write(i+1);
            return;
        }
    }
    process.stdout.write(-1);
}
main()