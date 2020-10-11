const score = document.getElementById("score");
const level = document.getElementById("level");
const lines = document.getElementById("lines");

let pointsToScore = 20;
let counterLevel = 0;
let levelNumber = 0;
let contador = 1;

function drawNumberLines() {
  lines.innerHTML = contador++;
}

function cleanBoardScore() {
  score.innerHTML = 0;
  level.innerHTML = 0;
  lines.innerHTML = 0;
}

function scorePoints() {
  score.innerHTML = pointsToScore * contador;
}

function levels() {
  counterLevel++;
  // Level 1
  if (counterLevel > 1 && counterLevel < 3) changerLevel(30);

  // Level 2
  if (counterLevel > 4 && counterLevel < 6) changerLevel(40);

  // Level 3
  if (counterLevel > 7 && counterLevel < 9) changerLevel(5);

  // Level 4
  if (counterLevel > 10 && counterLevel < 12) changerLevel(5);

  // Level 5
  if (counterLevel > 13 && counterLevel < 15) changerLevel(5);

  // Level 6
  if (counterLevel > 16 && counterLevel < 18) changerLevel(5);

  // Level 7
  if (counterLevel > 19 && counterLevel < 21) changerLevel(5);

  // Level 8
  if (counterLevel > 22 && counterLevel < 24) changerLevel(2);

  // Level 9
  if (counterLevel > 25 && counterLevel < 27) changerLevel(2);

  // Level 10
  if (counterLevel > 25 && counterLevel < 27) changerLevel(2);

  // Level 11
  if (counterLevel > 28 && counterLevel < 30) changerLevel(3);

  // Level 12
  if (counterLevel > 31 && counterLevel < 33) changerLevel(3);

  // Level 13
  if (counterLevel > 31 && counterLevel < 33) changerLevel(3);

  // Level 14
  if (counterLevel > 31 && counterLevel < 33) changerLevel(3);

  // Level 15
  if (counterLevel > 31 && counterLevel < 33) changerLevel(3);

  // Level 16
  if (counterLevel > 31 && counterLevel < 33) changerLevel(3);

  // Level 17
  if (counterLevel > 31 && counterLevel < 33) changerLevel(3);

  console.log(piece.delay);
}

function changerLevel(value) {
  console.log("CAMBIO DE NIVEL");
  updatingLevel();
  piece.delay -= value;
}

function updatingLevel() {
  levelNumber++;
  level.innerHTML = levelNumber;
}

/*
 * Light Controler
 */
function lightControler(order) {
  const canvasBox = document.getElementById("canvasBox");

  if (order === true) lightOn(canvasBox);
  if (order === false) lightOff(canvasBox);
}

function lightOn(on) {
  on.classList.add("light-on");
}

function lightOff(off) {
  off.classList.remove("light-on");
}
