<template>
  <div class="home">
    <GameArea />
  </div>
</template>

<script>
// @ is an alias to /src
import GameArea from "@/components/GameArea.vue";

export default {
  name: "HomeView",
  components: {
    GameArea,
  },
};
</script>
