<template>
  <div class="playerSide">
    <div class="timer">
      <p :class="{ almostNoTime, noTime }">
        {{ minutes.toString().padStart(2, "0") }}:{{
          seconds.toString().padStart(2, "0")
        }}
      </p>
    </div>
    <div
      @click="buttonPressed"
      :class="{
        changeTurn: true,
        whiteButton: pieces === 'white',
        blackButton: pieces === 'black',
        blockButton: isNotTurn,
      }"
    >
      <p><img :src="imgSrc" />PLAY<img :src="imgSrc" /></p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const { secondsRemaining, pieces, isItsTurn } = defineProps({
  secondsRemaining: Number,
  pieces: String,
  isItsTurn: Boolean,
});
const emits = defineEmits(["pressed"]);

const imgSrc = "src/assets/chess-pawn.svg";

const minutes = computed(() => Math.floor(secondsRemaining / 60));
const seconds = computed(() => secondsRemaining - minutes.value * 60);
const isNotTurn = computed(() => !isItsTurn);

const almostNoTime = computed(() => {
  if (secondsRemaining > 0 && secondsRemaining < 10) return true;
});

const noTime = computed(() => {
  if (secondsRemaining <= 0) return true;
});

const buttonPressed = () => {
  emits("pressed", pieces);
};
</script>

<style>
@keyframes blinker {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
<style scoped>
.playerSide {
  height: 45%;

  .timer {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 45%;
    margin-bottom: 5%;

    p {
      color: white;
      height: 100%;
      font-size: 600%;
      font-family: "Digital Webfont";
      text-align: center;
      align-content: center;
    }
  }

  .changeTurn {
    width: 100%;
    height: 50%;
    background-color: #81b64c;
    box-shadow: 0px 5px 0px 0px rgba(69, 117, 60, 1);
    border-radius: 1rem;
    cursor: pointer;

    p {
      width: 100%;
      height: 100%;
      text-align: center;
      align-content: center;
      font-size: 200%;
      font-family: sans-serif;
      font-weight: bolder;

      img {
        height: 1em;
      }
    }
  }

  .changeTurn.whiteButton {
    p {
      color: white;
      img {
        filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(10deg)
          brightness(101%) contrast(111%);
      }
    }
  }

  .changeTurn.blackButton {
    p {
      color: black;
    }
  }

  .changeTurn.blockButton {
    background-color: #7d7d7d;
    box-shadow: none;
  }

  p.almostNoTime {
    color: #8f0000;
  }

  p.noTime {
    color: black;
    animation: blinker 1s cubic-bezier(1, 0, 0, 1) infinite;
  }
}
</style>
