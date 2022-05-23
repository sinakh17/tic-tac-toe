import { isPlaying, activePlayer, currentPlayer } from "../Tools/variables";
import checkWinner from "./checkWinner";
import switchPlayer from "./switchPlayer";
const playing = function () {
  const houses = document.querySelectorAll(".house");
  houses.forEach(function (h) {
    h.addEventListener("click", function () {
      if (this.firstChild.textContent === "" && isPlaying) {
        if (activePlayer === 1) {
          this.firstChild.style.color = "#000";
        } else {
          this.firstChild.style.color = "red";
        }
        this.firstChild.textContent = currentPlayer.xo;
        checkWinner();
        if (isPlaying) {
          switchPlayer();
        }
      }
    });
  });
};
export default playing;
