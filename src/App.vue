<template>
  <MainDisplay />
</template>

<script setup>
import MainDisplay from "./components/MainDisplay.vue";
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  margin-block-start: 0;
  margin-block-end: 0;
  user-select: none;
}

body {
  margin: auto;
  width: 100vw;
  height: 100vh;

  background: #ffffff url("@/assets/background.png") center center/cover
    no-repeat;
}

#app {
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 600px) {
  body {
    width: 80vw;
  }
}

@media only screen and (min-width: 900px) {
  body {
    width: 60vw;
  }
}
</style>
