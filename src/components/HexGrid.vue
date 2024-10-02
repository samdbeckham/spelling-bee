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
  --cell-width: 90px;
  --top: calc(50% - (0.5 * (var(--cell-width))));
  --left: var(--top);

  aspect-ratio: 1;
  font-size: 1.2rem;
  margin: 0;
  position: relative;
  width: 300px;
}

.cell {
  left: var(--left);
  position: absolute;
  top: var(--top);
  transition: transform 0.1s ease-in-out;
}

.cell:nth-child(2) {
  top: calc(var(--top) - var(--y-diff));
}

.cell:nth-child(3) {
  top: calc(var(--top) + var(--y-diff));
}

.cell:nth-child(4),
.cell:nth-child(6) {
  top: calc(var(--top) - var(--y-diff-m));
}

.cell:nth-child(5),
.cell:nth-child(7) {
  top: calc(var(--top) + var(--y-diff-m));
}

.cell:nth-child(4),
.cell:nth-child(5) {
  left: calc(var(--left) - var(--x-diff));
}

.cell:nth-child(6),
.cell:nth-child(7) {
  left: calc(var(--left) + var(--x-diff));
}
</style>
