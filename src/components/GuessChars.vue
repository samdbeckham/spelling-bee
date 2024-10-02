<template>
  <div class="guessChars">
    <span v-for="({ isKey, char }, i) in chars" :key="i" :class="{ isKey }">{{
      char
    }}</span>
  </div>
</template>

<script>
export default {
  name: "GuessChars",
  props: {
    chars: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.guessChars {
  font-size: 1.8rem;
  font-weight: bold;
  height: 1em;
  margin: 1rem;
  text-transform: uppercase;
}

.isKey {
  color: var(--color-primary);
}
</style>
