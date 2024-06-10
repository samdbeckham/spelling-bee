<template>
  <div class="gameArea">
    <ScoreBoard :score="score" />
    <SubmittedWords v-if="submittedWords.length" :words="submittedWords" />
    <GuessChars :chars="chars" />
    <HexGrid :letters="letters" @letter-pressed="handleLetterPressed" />
    <ControlCenter
      @delete="handleDelete"
      @shuffle="handleShuffle"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import isDictionaryWord from "check-dictionary-word";
import ControlCenter from "./ControlCenter.vue";
import GuessChars from "./GuessChars.vue";
import HexGrid from "./HexGrid.vue";
import ScoreBoard from "./ScoreBoard.vue";
import SubmittedWords from "./SubmittedWords.vue";

const getLetters = (word) => {
  const letters = word.split("");
  return letters.map((letter, i) => ({
    char: letter.toLowerCase(),
    id: i,
    isKey: i === 0,
  }));
};

export default {
  name: "GameArea",
  components: {
    ControlCenter,
    GuessChars,
    HexGrid,
    ScoreBoard,
    SubmittedWords,
  },
  data() {
    return {
      chars: [],
      letters: getLetters("Truancy"),
      submittedWords: [],
      score: 0,
    };
  },
  methods: {
    handleLetterPressed(letter) {
      this.chars.push(letter);
    },
    handleDelete() {
      this.chars.pop();
    },
    handleShuffle() {
      const firstLetter = this.letters.shift();
      this.letters = this.letters.sort(() => Math.random() - 0.5);
      this.letters.unshift(firstLetter);
    },
    handleSubmit() {
      const submittedWord = this.chars.map((char) => char.char).join("");
      const hasKeyLetter = this.chars.filter((char) => char.isKey).length;
      const alreadyEntered = this.submittedWords.filter(
        (word) => word === submittedWord
      ).length;
      let score = this.chars.length - 3;
      const uniqueLetters = new Set(submittedWord.split(""));
      const isPangram = uniqueLetters.size === 7;

      if (isPangram) {
        score += 7;
      }

      if (this.chars.length < 4) {
        this.handleBadInput("not enough letters");
      } else if (!hasKeyLetter) {
        this.handleBadInput("key letter missing");
      } else if (!isDictionaryWord(submittedWord)) {
        this.handleBadInput("not a word");
      } else if (alreadyEntered) {
        this.handleBadInput("Word already entered");
      } else {
        this.submittedWords.push(submittedWord);
        this.score += score;
      }
      this.chars = [];
    },
    handleBadInput(message) {
      console.log(message);
    },
  },
};
</script>

<style scoped>
.gameArea {
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
