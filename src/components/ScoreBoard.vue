<template>
  <div class="submittedWords">
    <span>{{ score }}</span>
  </div>
</template>

<script>
export default {
  name: "ScoreBoard",
  props: {
    score: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.isKey {
  color: #09c;
}
</style>
