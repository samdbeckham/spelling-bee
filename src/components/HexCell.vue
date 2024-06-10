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
  background-color: #eee;
  border: none;
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  color: inherit;
  cursor: pointer;
  display: block;
  font-size: 1.6em;
  font-weight: bold;
  outline: none;
  text-transform: uppercase;
  width: 5.5rem;
}

button:hover {
  background-color: #ccc;
}

button:active {
  background-color: #aaa;
}

.isKey {
  background-color: #09c;
}
</style>
