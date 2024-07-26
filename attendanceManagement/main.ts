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
  let resultHour = 0;
  let resultMinute = 0;
  let allDiff = 0;
  const N = Number(input[0]);
  const attendanceArr = input.slice(1).map((attendance) => {
    return attendance.split(" ");
  });
  const attendanceArrAsDate = attendanceArr.map((attendanceTime) => {
    return attendanceTime.map((time) => {
      return new Date(`2021/01/01 ${time}`);
    });
  });

  attendanceArrAsDate.forEach((attendanceTime) => {
    const diff = attendanceTime[1].getTime() - attendanceTime[0].getTime();
    allDiff += diff;
  });

  resultHour = Math.floor(allDiff / 1000 / 60 / 60);
  resultMinute = allDiff / 1000 / 60 - resultHour * 60;

  console.log(`${resultHour} ${resultMinute}`);
  const result = input[0];
  return result;
}
