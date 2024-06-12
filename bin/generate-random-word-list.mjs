import fs from "node:fs";
import wordListPath from "word-list";

// const filename = "t_ruancy";
// const [keyLetter, remainingLetters] = filename.split("_");
// const validLetters = [keyLetter, ...remainingLetters.split("")];

const wordArray = fs.readFileSync(wordListPath, "utf8").split("\n");

const pangrams = wordArray.filter((word) => {
  const uniqLetters = new Set(word.split(""));
  return uniqLetters.size === 7;
});

const filename = "random";
const pangram = pangrams[Math.floor(Math.random() * pangrams.length)];
const validLetters = Array.from(new Set(pangram.split("")));
const keyLetter = validLetters[Math.floor(Math.random() * 7)];

const byFour = (word) => word.length > 3;
const byKeyLetter = (word) => word.includes(keyLetter);
const byValidLetters = (word) =>
  !word.split("").find((letter) => !validLetters.includes(letter));

const validWords = wordArray
  .filter(byFour)
  .filter(byKeyLetter)
  .filter(byValidLetters);

fs.writeFileSync(
  `./data/${filename}.json`,
  JSON.stringify({
    keyLetter,
    validLetters,
    validWords,
  })
);
