"use strict";

import PopUp from "./popup.js";
import Field from "./field.js";
import { GameBuilder, Reason } from "./game.js";

const CARROT_SIZE = 80;
const CARROT_COUNT = 20;
const BUG_COUNT = 20;
const GAME_DURATION_SEC = 20;

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
  .withBugCOunt(20)
  .withCarrotCount(20)
  .withGameDuration(20)
  .build();
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay";
      break;
    case Reason.lose:
      message = "Lost";
      break;
    case Reason.win:
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
