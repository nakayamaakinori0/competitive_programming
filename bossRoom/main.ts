
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
  const result = input[0];
  return result;
}
