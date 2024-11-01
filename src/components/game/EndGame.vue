<template>
  <div
    @mousedown="startHold"
    @mouseup="cancelHold"
    @mouseleave="cancelHold"
    @touchstart="startHold"
    @touchend="cancelHold"
  >
    <p :style="{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }">
      {{ textButton }}&nbsp;/&nbsp;<span>{{ textButton }}</span>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emits = defineEmits(["leaveGame"]);
const opacity = ref(0.4);
const holdDuration = 1000;
let holdTimeout = null;
let interval = null;
const textButton = ref("End game");

const startHold = () => {
  let start = Date.now();
  textButton.value = "Hold";

  interval = setInterval(() => {
    const elapsed = Date.now() - start;
    opacity.value = 0.4 + (0.4 * elapsed) / holdDuration;
  }, 10);

  holdTimeout = setTimeout(() => {
    emits("leaveGame");
    opacity.value = 0.4;
    clearInterval(interval);
  }, holdDuration);
};

const cancelHold = () => {
  clearTimeout(holdTimeout);
  clearInterval(interval);
  opacity.value = 0.4;
  textButton.value = "End game";
};
</script>

<style scoped>
div {
  height: 10%;
  cursor: pointer;
  padding: 0.5em 0;
}

p {
  color: white;
  font-size: large;
  font-weight: bolder;
  font-family: sans-serif;
  align-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  transition: background-color 0.1s linear;
}

span {
  display: inline-block;
  transform: rotate(180deg);
  vertical-align: sub;
}
</style>
