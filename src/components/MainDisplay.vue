<template>
  <main>
    <Menu v-if="currentGameOption === null" @gameStarted="gameStartedEvent" />
    <Game
      v-if="currentGameOption !== null"
      @leaveGame="leaveGame"
      :gameOption="currentGameOption"
    />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Menu from "./menu/Menu.vue";
import Game from "./game/Game.vue";

const currentGameOption = ref(null);

const gameStartedEvent = (gameOption) => {
  currentGameOption.value = gameOption;
};

const leaveGame = () => {
  currentGameOption.value = null;
};
</script>

<style scoped>
main {
  height: 100%;
}
</style>
