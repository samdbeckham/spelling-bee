// Note: this is looking for seven letter pangrams

export default (word, size = 7) => {
  if (word.length < size) {
    return false;
  }
  const uniqueLetters = new Set(word.split(""));
  return uniqueLetters.size === size;
};
