import { isPlaying, currentPlayer, root } from "../Tools/variables";
const checkWinner = function () {
  const h1 = document.querySelector("#house-1").firstChild.textContent;
  const h2 = document.querySelector("#house-2").firstChild.textContent;
  const h3 = document.querySelector("#house-3").firstChild.textContent;
  const h4 = document.querySelector("#house-4").firstChild.textContent;
  const h5 = document.querySelector("#house-5").firstChild.textContent;
  const h6 = document.querySelector("#house-6").firstChild.textContent;
  const h7 = document.querySelector("#house-7").firstChild.textContent;
  const h8 = document.querySelector("#house-8").firstChild.textContent;
  const h9 = document.querySelector("#house-9").firstChild.textContent;
  if (
    (h1 === h2 && h2 === h3 && h1 !== "") ||
    (h1 === h4 && h4 === h7 && h1 !== "") ||
    (h1 === h5 && h5 === h9 && h1 !== "") ||
    (h4 === h5 && h5 === h6 && h5 !== "") ||
    (h7 === h8 && h8 === h9 && h7 !== "") ||
    (h2 === h5 && h5 === h8 && h5 !== "") ||
    (h3 === h6 && h6 === h9 && h6 !== "") ||
    (h3 === h5 && h5 === h7 && h5 !== "")
  ) {
    isPlaying = false;
    root.firstChild.remove();
    root.prepend(currentPlayer.winnerMessage());
  } else if (
    h1 !== "" &&
    h2 !== "" &&
    h3 !== "" &&
    h4 !== "" &&
    h5 !== "" &&
    h6 !== "" &&
    h7 !== "" &&
    h8 !== "" &&
    h9 !== ""
  ) {
    isPlaying = false;
    root.firstChild.remove();
    root.prepend(currentPlayer.drawMessage());
  }
};
export default checkWinner;
