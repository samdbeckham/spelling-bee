<template>
  <div class="controlCenter">
    <button @click="this.$emit('delete')">Delete</button>
    <button @click="this.$emit('shuffle')">♻︎</button>
    <button @click="this.$emit('submit')">Enter</button>
  </div>
</template>

<script>
export default {
  name: "ControlCenter",
  emits: ["delete", "shuffle", "submit"],
};
</script>

<style scoped>
.controlCenter {
  display: flex;
  gap: 1rem;
}

button {
  background: var(--color-white);
  border-radius: 99px;
  border: 1px solid var(--color-gray);
  color: inherit;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.6rem 1rem;
}

button:active {
  background-color: var(--color-gray);
}
</style>
