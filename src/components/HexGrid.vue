<template>
  <div class="grid">
    <HexCell
      v-for="letter in sortedLetters"
      :key="letter.id"
      :char="letter.char"
      :is-key="letter.isKey"
      class="cell"
      @letter-pressed="this.$emit('letter-pressed', $event)"
    />
  </div>
</template>

<script>
import HexCell from "./HexCell.vue";

export default {
  name: "HexGrid",
  components: {
    HexCell,
  },
  props: {
    letters: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    sortedLetters() {
      const keyLetter = this.letters.find((letter) => letter.isKey);
      const remainingLetters = this.letters.filter((letter) => !letter.isKey);
      return [keyLetter, ...remainingLetters];
    },
  },
};
</script>

<style scoped>
.grid {
  --x-diff: 25%;
  --y-diff: 30%;
  --y-diff-m: 15%;
  position: relative;
  width: 300px;
  aspect-ratio: 1;
  margin: 0;
  font-size: 1.2rem;
}

.cell {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-in-out;
}

.cell:nth-child(2) {
  top: calc(50% - var(--y-diff));
}

.cell:nth-child(3) {
  top: calc(50% + var(--y-diff));
}

.cell:nth-child(4),
.cell:nth-child(6) {
  top: calc(50% - var(--y-diff-m));
}

.cell:nth-child(5),
.cell:nth-child(7) {
  top: calc(50% + var(--y-diff-m));
}

.cell:nth-child(4),
.cell:nth-child(5) {
  left: calc(50% - var(--x-diff));
}

.cell:nth-child(6),
.cell:nth-child(7) {
  left: calc(50% + var(--x-diff));
}
</style>
