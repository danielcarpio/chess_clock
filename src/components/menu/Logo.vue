<template>
  <div class="logo">
    <img :src="imgSource" />
  </div>
</template>

<script setup>
const imgSource = new URL("../../assets/logo.svg", import.meta.url).href;
</script>

<style lang="css" scoped>
.logo {
  width: 30%;
  margin: auto;
  margin-bottom: 10%;
}

img {
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 600px) {
  .logo {
    width: 30%;
    margin-bottom: 10%;
  }
}

@media only screen and (min-width: 900px) {
  .logo {
    width: 20%;
    margin-bottom: 5%;
  }
}
</style>
