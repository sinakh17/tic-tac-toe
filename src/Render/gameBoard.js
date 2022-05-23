import { root, currentPlayer } from "../Tools/variables";
import init from "./init";
import playing from "./playing";
const gameBoard = function () {
  const container = document.createElement("div");
  const mainBoard = document.createElement("div");
  const resetButton = document.createElement("button");
  resetButton.setAttribute("class", "btn");
  resetButton.textContent = "Reset";
  container.setAttribute("class", "container");
  mainBoard.setAttribute("class", "mainBoard");
  for (let i = 1; i < 10; i++) {
    let house = document.createElement("div");
    const text = document.createElement("p");
    house.setAttribute("id", `house-${i}`);
    house.setAttribute("class", "house");
    text.setAttribute("class", "xo");
    house.appendChild(text);
    mainBoard.appendChild(house);
  }
  resetButton.addEventListener("click", function () {
    root.innerHTML = "";
    init();
    gameBoard();
    playing();
  });
  container.appendChild(mainBoard);
  container.appendChild(resetButton);
  root.appendChild(currentPlayer.turnMessage());
  root.appendChild(container);
};
export default gameBoard;
