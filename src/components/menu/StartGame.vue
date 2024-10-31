<template>
  <div class="startGame">
    <h1>Play Chess</h1>
    <div class="options">
      <GameOption
        v-for="option in options"
        :seconds="option.seconds"
        :increment="option.increment"
        @gameStarted="gameStarted"
      />
    </div>
  </div>
</template>

<script setup>
import GameOption from "./GameOption.vue";
import { options } from "./Options";

const emits = defineEmits(["gameStarted"]);

const gameStarted = (gameOption) => {
  emits("gameStarted", gameOption);
};
</script>

<style scoped>
.startGame {
  background-color: rgba(0, 0, 0, 0.2);
}

h1 {
  color: white;
  text-align: center;
  font-family: sans-serif;
  font-size: 200%;
}

.options {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-bottom: 1em;
}
</style>
