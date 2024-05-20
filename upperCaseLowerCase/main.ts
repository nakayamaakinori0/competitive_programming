import * as fs from "fs";

const inputFile = "input.dat";
const input = fs.readFileSync(inputFile, "utf8").trim().split("\n");

const lines: string[] = input;

const correctionRule: string = lines[0];
let correctionRuleReverse: string = "";
const textToCorrect: string = lines[1];
const correctionMap: string[] = [];

for (let i = 0; i < 26; i++) {
  if (correctionRule[i] === correctionRule[i].toUpperCase()) {
    correctionRuleReverse += correctionRule[i].toLowerCase();
  } else {
    correctionRuleReverse += correctionRule[i].toUpperCase();
  }
}

for (let l = 0; l < textToCorrect.length; l++) {
  for (let i = 0; i < 26; i++) {
    if (textToCorrect[l] === correctionRule[i]) {
      correctionMap.push(textToCorrect[l]);
    } else if (textToCorrect[l] === correctionRuleReverse[i]) {
      if (textToCorrect[l] === textToCorrect[l].toUpperCase()) {
        correctionMap.push(textToCorrect[l].toLowerCase());
      } else {
        correctionMap.push(textToCorrect[l].toUpperCase());
      }
    }
  }
}

const result = correctionMap.join("");
console.log(result);
