import { activePlayer, currentPlayer, root } from "../Tools/variables";
import Player from "../Entity/Player";
const switchPlayer = function () {
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentPlayer = new Player(`${activePlayer}`);
  root.firstChild.remove();
  root.prepend(currentPlayer.turnMessage());
};
export default switchPlayer;
