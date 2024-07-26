process.stdin.resume();
process.stdin.setEncoding("utf8");

var lines: string[] = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line: string) => {
  lines.push(line);
});

reader.on("close", () => {
  main(lines);
});

export function main(input: string[]): any {
  const [N, K] = input[0].split(" ").map(Number);
  // ここの二次元配列の作り方わかりにくいな
  const bingoSheet = input.slice(1, N + 1).map((line) => {
    return line.split(" ");
  });

  const lotteryNumbers = input[N + 1].split(" ");

  const bingoSheetResult = bingoSheet.map((row) => {
    return row.map((num) => {
      return lotteryNumbers.includes(num) ? "hit" : false;
    });
  });

  let answer = 0;

  // 行のチェック
  for (let i = 0; i < N; i++) {
    let hitCount = 0;
    for (let j = 0; j < N; j++) {
      if (bingoSheetResult[i][j] === "hit") {
        hitCount++;
      }
    }
    if (hitCount === N) {
      answer++;
    }
  }

  // 列のチェック
  for (let i = 0; i < N; i++) {
    let hitCount = 0;
    for (let j = 0; j < N; j++) {
      if (bingoSheetResult[j][i] === "hit") {
        hitCount++;
      }
    }
    if (hitCount === N) {
      answer++;
    }
  }

  // 左上から右下への対角線チェック
  let hitCount = 0;
  for (let i = 0; i < N; i++) {
    if (bingoSheetResult[i][i] === "hit") {
      hitCount++;
    }
  }
  if (hitCount === N) {
    answer++;
  }

  // 右上から左下への対角線チェック
  hitCount = 0;
  for (let i = 0; i < N; i++) {
    if (bingoSheetResult[i][N - 1 - i] === "hit") {
      hitCount++;
    }
  }
  if (hitCount === N) {
    answer++;
  }

  console.log(answer);
}
