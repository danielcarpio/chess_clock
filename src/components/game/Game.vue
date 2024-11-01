<template>
  <div class="game">
    <PlayerSide
      @pressed="buttonPressedEvent"
      class="black"
      pieces="black"
      :isItsTurn="doneFirstMove && !isWhiteTurn"
      :secondsRemaining="blackCounter"
    />
    <EndGame @leaveGame="leaveGame" />
    <PlayerSide
      @pressed="buttonPressedEvent"
      class="white"
      pieces="white"
      :isItsTurn="!doneFirstMove || isWhiteTurn"
      :secondsRemaining="whiteCounter"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import PlayerSide from "./PlayerSide.vue";
import EndGame from "./EndGame.vue";

const { gameOption } = defineProps({
  gameOption: Object,
});

const emits = defineEmits(["leaveGame"]);

const doneFirstMove = ref(false);
const isWhiteTurn = ref(false);
const blackCounter = ref(gameOption.seconds);
const whiteCounter = ref(gameOption.seconds);
let gameEnded = false;

let intervalDef = null;

const intervalCreation = () => {
  intervalDef = setInterval(() => {
    let checkValue = null;
    if (isWhiteTurn.value) {
      whiteCounter.value--;
      checkValue = whiteCounter.value;
    } else {
      blackCounter.value--;
      checkValue = blackCounter.value;
    }

    if (checkValue <= 0) {
      endGame();
    }
  }, 1000);
};

const firstMoveLogic = (pieces) => {
  if (pieces === "black") return;
  doneFirstMove.value = true;
  intervalCreation();
};

const checkIfValidMove = (pieces) => {
  if (
    (pieces === "black" && isWhiteTurn.value) ||
    (pieces === "white" && !isWhiteTurn.value)
  )
    return false;

  return true;
};

const gameLogic = () => {
  if (isWhiteTurn.value) whiteCounter.value += gameOption.increment;
  if (!isWhiteTurn.value) blackCounter.value += gameOption.increment;
  isWhiteTurn.value = !isWhiteTurn.value;
};

const buttonPressedEvent = (pieces) => {
  if (gameEnded) return;
  if (!doneFirstMove.value) {
    firstMoveLogic(pieces);
    return;
  }

  if (!checkIfValidMove(pieces)) return;
  gameLogic();
};

const endGame = () => {
  clearInterval(intervalDef);
  gameEnded = true;
};

const leaveGame = () => {
  endGame();
  emits("leaveGame");
};
</script>

<style>
.game {
  width: 100%;
  height: 100%;
  padding: 2em 2em;
}

.black {
  transform: rotate(180deg);
}
</style>
