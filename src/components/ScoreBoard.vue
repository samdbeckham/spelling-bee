<template>
  <div class="scoreBoard">
    <div class="scoreWord">Nice</div>
    <div class="scoreLine">
      <span
        class="scoreMarker"
        :style="{
          left: scorePercentage,
        }"
        >{{ score }}</span
      >
      <div class="scorePips">
        <div class="scorePip"></div>
        <div class="scorePip"></div>
        <div class="scorePip"></div>
        <div class="scorePip"></div>
        <div class="scorePip"></div>
        <div class="scorePip"></div>
        <div class="scorePip"></div>
        <div class="scorePip"></div>
        <div class="scorePip"></div>
      </div>
    </div>
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
    maxScore: {
      type: Number,
      required: true,
    },
  },
  computed: {
    scorePercentage() {
      const percent = this.score / (this.score + this.maxScore);
      return `${percent * 100}%`;
    },
  },
};
</script>

<style scoped>
.scoreBoard {
  --marker-width: 30px;

  align-items: center;
  display: grid;
  grid-template-columns: 20% auto;
  padding: 1rem 0.5rem;
  width: 100%;
}
.scoreWord {
  text-align: left;
}

.scoreLine {
  padding: 0;
  position: relative;
  overflow: hidden;
  height: var(--marker-width);
}

.scoreMarker {
  background: var(--color-primary);
  border-radius: 999px;
  left: 0%;
  line-height: var(--marker-width);
  position: absolute;
  width: var(--marker-width);
}

.scoreMarker::before,
.scoreMarker::after {
  content: "";
  height: 2px;
  margin-top: -1px;
  position: absolute;
  top: 50%;
  width: 999px;
}

.scoreMarker::before {
  background: var(--color-primary);
  left: 0;
  margin-left: -999px;
}

.scoreMarker::after {
  background: var(--color-gray);
  right: 0;
  margin-right: -999px;
}
</style>
