<template>
  <div class="submittedWords">
    <span v-for="word in reversedWords" :key="word" class="word">{{
      word
    }}</span>
  </div>
</template>

<script>
export default {
  name: "SubmittedWords",
  props: {
    words: {
      type: Array,
      required: true,
    },
  },
  computed: {
    reversedWords() {
      return [...this.words].reverse();
    },
  },
};
</script>

<style scoped>
.submittedWords {
  border-radius: 0.6em;
  border: 1px solid var(--color-gray);
  display: flex;
  flex-wrap: nowrap;
  gap: 0.6em;
  overflow: hidden;
  padding: 0.6em 1.2em;
  position: relative;
  width: 100%;
}

.submittedWords::before {
  background: var(--white);
  bottom: 0;
  content: "";
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 2.5em;
}

.submittedWords::after {
  aspect-ratio: 1;
  border-bottom: 2px solid;
  border-right: 2px solid;
  content: "";
  display: block;
  position: absolute;
  right: 0.8em;
  top: 0.9em;
  transform: rotate(45deg);
  width: 0.5em;
}

.word {
  text-transform: capitalize;
}
</style>
