import isPangram from "./isPangram.js";

export default (word) => {
  const baseScore = word.length - 3;
  return isPangram(word) ? baseScore + 7 : baseScore;
};
