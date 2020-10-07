const score = document.getElementById("score")
const level = document.getElementById("level")
const lines = document.getElementById("lines")

let pointsToScore = 20
let counterLevel = 0
let levelNumber = 0

function drawNumberLines() {
  lines.innerHTML = contador++
}

function cleanBoardScore() {
  lines.innerHTML = 0
  score.innerHTML = 0
}

function scorePoints() {
  score.innerHTML = pointsToScore * contador
}

function levels() {
  counterLevel++
  if (counterLevel > 1 && counterLevel < 3) {
    console.log("DENTRO DEL IF")
    updatingLevel()
    piece.delay = 20
  }
  
  if (counterLevel > 4 && counterLevel < 6) {
    console.log("SEGUNDA CONDICION")
    updatingLevel()
  }
}

function updatingLevel() {
  levelNumber++
  level.innerHTML = levelNumber
}