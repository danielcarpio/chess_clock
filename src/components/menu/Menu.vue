<template>
  <div class="menu">
    <Logo />
    <StartGame @gameStarted="gameStarted" />
  </div>
</template>

<script setup>
import Logo from "./Logo.vue";
import StartGame from "./StartGame.vue";

const emits = defineEmits(["gameStarted"]);

const gameStarted = (gameOption) => {
  emits("gameStarted", gameOption);
};
</script>

<style lang="css" scoped>
.menu {
  width: 100%;
  height: 100%;
  padding: 5em 1em 1em 1em;
}
</style>
