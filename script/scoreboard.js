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
  const firstSubstract = 20;
  const secondsubstract = 10;

  counterLevel++;
  // Level 1
  if (counterLevel > 1 && counterLevel < 3) changerLevel(firstSubstract);

  // Level 2
  if (counterLevel > 4 && counterLevel < 6) changerLevel(firstSubstract);

  // Level 3
  if (counterLevel > 7 && counterLevel < 9) changerLevel(firstSubstract);

  // Level 4
  if (counterLevel > 10 && counterLevel < 12) changerLevel(firstSubstract);

  // Level 5
  if (counterLevel > 13 && counterLevel < 15) changerLevel(firstSubstract);

  // Level 6
  if (counterLevel > 16 && counterLevel < 18) changerLevel(firstSubstract);

  // Level 7
  if (counterLevel > 19 && counterLevel < 21) changerLevel(firstSubstract);

  // Level 8
  if (counterLevel > 22 && counterLevel < 24) changerLevel(firstSubstract);

  // Level 9
  if (counterLevel > 25 && counterLevel < 27) changerLevel(firstSubstract);

  // Level 10
  if (counterLevel > 25 && counterLevel < 27) changerLevel(firstSubstract);

  // Level 11
  if (counterLevel > 28 && counterLevel < 30) changerLevel(secondsubstract);

  // Level 12
  if (counterLevel > 31 && counterLevel < 33) changerLevel(secondsubstract);

  // Level 13
  if (counterLevel > 34 && counterLevel < 37) changerLevel(secondsubstract);

  // Level 14
  if (counterLevel > 38 && counterLevel < 40) changerLevel(secondsubstract);

  // Level 15
  if (counterLevel > 41 && counterLevel < 43) changerLevel(secondsubstract);

  // Level 16
  if (counterLevel > 44 && counterLevel < 47) changerLevel(secondsubstract);

  // Level 17
  if (counterLevel > 48 && counterLevel < 50) changerLevel(secondsubstract);

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
