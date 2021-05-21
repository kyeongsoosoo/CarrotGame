"use strict";

import PopUp from "./popup.js";
import Field from "./field.js";
import Game from "./game.js";

const CARROT_SIZE = 80;
const CARROT_COUNT = 20;
const BUG_COUNT = 20;
const GAME_DURATION_SEC = 20;

const gameFinishBanner = new PopUp();

const game = new Game(20, 20, 20);
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case "cancel":
      message = "Replay";
      break;
    case "lose":
      message = "Lost";
      break;
    case "win":
      message = "Won";
      break;
    default:
      return;
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.startGame();
});
