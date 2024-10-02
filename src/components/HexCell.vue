<template>
  <button :class="{ isKey }" @click="handleClick">{{ char }}</button>
</template>

<script>
export default {
  name: "HexCell",
  props: {
    isKey: {
      type: Boolean,
      default: false,
    },
    char: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("letterPressed", { char: this.char, isKey: this.isKey });
    },
  },
};
</script>

<style scoped>
button {
  aspect-ratio: 1;
  background-color: var(--color-gray);
  border: none;
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  color: inherit;
  cursor: pointer;
  font-size: 1.6em;
  font-weight: bold;
  text-transform: uppercase;
  width: var(--cell-width);
}

button:active {
  transform: scale(0.8);
}

.isKey {
  background-color: var(--color-primary);
}
</style>
