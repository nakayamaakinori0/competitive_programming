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
  // ここに処理を記述する
  console.log(input);
  const N = parseInt(input[0]); // 審査員の人数
  const scores = lines[1].split(" ").map(Number); // 各審査員の点数を配列として取得

  // 得点を計算する関数
  function calculateScore(N, scores) {
    let maxScore = Math.max(...scores);
    let minScore = Math.min(...scores);
    let sum =
      scores.reduce((acc, score) => {
        return acc + score;
      }, 0) -
      maxScore -
      minScore;

    let average = sum / (N - 2);
    return average;
  }

  // 得点を計算して出力
  const score = calculateScore(N, scores);
  console.log(Math.floor(score * 10) / 10); // 小数点以下1桁まで表示
  return;
}
