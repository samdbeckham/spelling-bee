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
  background: white;
  border-radius: 99px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.6rem 1rem;
}

button:hover {
  background-color: #ccc;
}

button:active {
  background-color: #aaa;
}
</style>
