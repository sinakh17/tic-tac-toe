import { activePlayer, isPlaying, currentPlayer } from "../Tools/variables";
import Player from "../Entity/Player";
const init = function () {
  isPlaying = true;
  activePlayer = 1;
  currentPlayer = new Player(`${activePlayer}`);
};
export default init;
