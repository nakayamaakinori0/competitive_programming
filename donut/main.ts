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
  /*
    文字列を走査して.があればその周囲一マスの文字列を探索する
    周囲のマス全てが#ならばドーナツとしてカウントする
  */

  const [height, width] = input[0].split(" ").map(Number);
  const inputArray = input.slice(1).map((row) => row.split(""));

  let donutCount = 0;

  //inputArrayの走査
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let sharpCount = 0;
      // .を見つけたら周囲のマスを探索
      if (inputArray[y][x] === ".") {
        for (let j = 0; j < 3; j++) {
          const initX = x - 1;
          const initY = y - 1;
          for (let i = 0; i < 3; i++) {
            // donutの穴はスキップ
            if (initX + i === x && initY + j === y) {
              continue;
            }
            // inputArrayの範囲をはみ出した場合はスキップ
            if (
              initX + i < 0 ||
              initY + j < 0 ||
              initX + i >= width ||
              initY + j >= height
            ) {
              continue;
            }
            if (inputArray[initY + j][initX + i] === "#") {
              sharpCount++;
              if (sharpCount === 8) {
                donutCount++;
              }
            }
          }
        }
      }
    }
  }

  console.log(donutCount);

  const result = donutCount;
  return result;
}
