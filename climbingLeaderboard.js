function climbingLeaderboard(scores, alice) {
  let boardSet = new Set(scores);
  // console.log('boardSet', boardSet)
  let playerIdx = [];
  let boardArr = Array.from(boardSet);
  let boardMap = {};
  for (let i = 0; i <= boardArr.length; i++) {
    boardMap[i] = {
      min: boardArr[i] ? boardArr[i] : Number.MIN_SAFE_INTEGER,
      max: boardArr[i - 1] ? boardArr[i - 1] : Number.MAX_SAFE_INTEGER,
    }
  }


  for (let i = 0; i < alice.length; i++) {
    let j = 0;
    while (j <= boardArr.length) {
      const {min, max} = boardMap[j];

      if (alice[i] >= min && alice[i] < max) {
        playerIdx.push(j + 1);
        break;
      }
      j++;

    }
  }
  return playerIdx;
}

console.log('climbingLeaderboard', climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))