<template>
  <div @click="gameStarted">
    <p>
      {{
        increment !== null
          ? `${Math.round(seconds / 60)} | ${increment}`
          : ` ${Math.round(seconds / 60)} min`
      }}
    </p>
  </div>
</template>

<script setup>
const { seconds, increment } = defineProps({
  seconds: {
    type: Number,
    required: true,
  },
  increment: {
    type: Number,
    required: false,
    default: null,
  },
});
const emits = defineEmits(["gameStarted"]);

const gameStarted = () => {
  emits("gameStarted", {
    seconds,
    increment,
  });
};
</script>

<style lang="css" scoped>
div {
  cursor: pointer;
  font-weight: bolder;
  background-color: rgba(0, 0, 0, 0.2);
  width: 30%;
  margin-top: 2%;
  padding: 1%;
  text-align: center;
}

p {
  color: white;
  font-family: sans-serif;
}
</style>
