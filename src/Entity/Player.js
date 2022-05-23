class Player {
  constructor(number) {
    this.number = number;
    this.xo = number === "1" ? "X" : "O";
  }
  winnerMessage() {
    const message = document.createElement("p");
    message.textContent = `player number ${this.number} wins!`;
    message.setAttribute("class", "turn");
    return message;
  }
  drawMessage() {
    const message = document.createElement("p");
    message.textContent = `No One wins!`;
    message.setAttribute("class", "turn");
    return message;
  }
  turnMessage() {
    const message = document.createElement("p");
    message.textContent = `player ${this.number} turn`;
    message.setAttribute("class", "turn");
    return message;
  }
}
export default Player;
