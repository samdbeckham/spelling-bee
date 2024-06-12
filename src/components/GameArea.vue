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
import { keyLetter, validLetters, validWords } from "@/data/random.json";
import getScore from "@/helpers/getScore";

import ControlCenter from "./ControlCenter.vue";
import GuessChars from "./GuessChars.vue";
import HexGrid from "./HexGrid.vue";
import ScoreBoard from "./ScoreBoard.vue";
import SubmittedWords from "./SubmittedWords.vue";

const letters = validLetters.map((letter, i) => ({
  char: letter.toLowerCase(),
  id: i,
  isKey: letter === keyLetter,
}));

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
      letters,
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
      this.letters = this.letters.sort(() => Math.random() - 0.5);
    },
    handleSubmit() {
      const submittedWord = this.chars.map(({ char }) => char).join("");
      const alreadyEntered = this.submittedWords.includes(submittedWord);
      const hasKeyLetter = (word) => word.split("").includes(keyLetter);

      if (this.chars.length < 4) {
        this.handleBadInput("not enough letters");
      } else if (!hasKeyLetter(submittedWord)) {
        this.handleBadInput("key letter missing");
      } else if (!validWords.includes(submittedWord)) {
        this.handleBadInput("not a word");
      } else if (alreadyEntered) {
        this.handleBadInput("Word already entered");
      } else {
        this.submittedWords.push(submittedWord);
        this.score += getScore(submittedWord);
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
