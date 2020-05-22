let log = console.log;
let table = console.table;

let canvas;
let ctx;
let FPS = 50;

let canvasWidth = 400;
let canvasHeight = 640;

let boardWidth = 10;
let boardHeight = 20;

let topMargin = 4; // Para el board

let pieceWidth = 40;
let pieceHeight = 40;

let red = "#FF0000";
let purple = "#800080";
let orange = "#FF8c00";
let yellow = "#ffd700";
let green = "#008000";
let cyan = "#00ced1";
let blue = "#0000cd";

let board = [];

/*
 * We need two extra lines, one each side, they are the limit of the canvas
 * The array has 21 rows and 12 columns but we just need 20 rows and 10 columns
 * the rest are the border of the array.
 */
function boardConstructor() {
  for (let x = 0; x < boardHeight + 1; x++) {
    let arrow = [];
    let column = null;
    for (let y = 0; y < boardWidth + 2; y++) {
      if (x == boardHeight || y == 0 || y == boardWidth + 1) {
        column = 1;
      } else {
        column = 0;
      }
      arrow.push(column);
    }
    board.push(arrow);
  }
}

// (12 x 21)
let tableroCopia = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

/******************************Creando objeto********************************/

let piece;

var objectPiece = function () {
  // Creación de un objeto
  this.x = 4;
  this.y = 0;
  this.angle = 0;
  this.type = 0;
  this.delay = 50;
  this.frame = 0;

  this.new = function () {
    this.type = Math.floor(Math.random() * 7);
    this.x = 4;
    this.y = 0;
  };

  this.drawPiece = function () {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (pieces[this.type][this.angle][y][x] != 0) {
          let color = null;
          switch (pieces[this.type][this.angle][y][x]) {
            case 1:
              color = red;
              break;
            case 2:
              color = purple;
              break;
            case 3:
              color = orange;
              break;
            case 4:
              color = yellow;
              break;
            case 5:
              color = green;
              break;
            case 6:
              color = cyan;
              break;
            case 7:
              color = blue;
              break;

            default:
              break;
          }
          ctx.fillStyle = color;
          ctx.fillRect((this.x + x - 1) * pieceWidth, (this.y + y - topMargin) * pieceHeight, pieceWidth, pieceHeight);
        }
      }
    }
  };

  this.fall = function () {
    if (this.frame < this.delay) {
      this.frame++;
    } else {
      if (this.collision(this.angle, this.y + 1, this.x) == false) {
        this.y++;
        this.frame = 0;
      } else {
        this.fix();
        this.new();
        this.cleanRows();

        if (this.checkIfYouLose()) {
          resetBoard();
        }
      }
    }
  };

  this.collision = function (newAngle, yNew, xNew) {
    let result = false;

    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (pieces[this.type][newAngle][y][x] > 0) {
          if (board[yNew + y][xNew + x] > 0) {
            result = true;
          }
        }
      }
    }
    return result;
  };

  this.rotar = function () {
    let newAngle = this.angle;
    if (newAngle < 3) {
      newAngle++;
    } else {
      newAngle = 0;
    }

    if (this.collision(newAngle, this.y, this.x) == false) {
      this.angle = newAngle;
    }
  };

  this.left = function () {
    if (this.collision(this.angle, this.y, this.x - 1) == false) {
      this.x--;
    }
  };

  this.right = function () {
    if (this.collision(this.angle, this.y, this.x + 1) == false) {
      this.x++;
      log("Derecha");
    }
  };

  this.down = function () {
    if (this.collision(this.angle, this.y + 1, this.x) == false) {
      this.y++;
      log("Abajo");
    }
  };

  this.checkIfYouLose = function () {
    let lose = false;
    for (let x = 1; x < boardWidth + 1; x++) {
      if (board[2][x] > 0) {
        lose = true;
      }
    }
    return lose;
  };

  this.cleanRows = function () {
    let fullRow = true;

    for (let y = topMargin; y < boardHeight; y++) {
      fullRow = true;

      for (let x = 1; x <= boardWidth; x++) {
        if (board[y][x] == 0) {
          fullRow = false;
        }
      }

      if (fullRow == true) {
        log("FIlA LLENA");
        for (let x = 1; x <= boardWidth; x++) {
          board[y][x] = 0;
        }
      }
    }
  };

  /************************fix pieces************************/

  this.fix = function () {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (pieces[this.type][this.angle][y][x] > 0) {
          board[this.y + y][this.x + x] = pieces[this.type][this.angle][y][x];
        }
      }
    }
  };

  this.new();
  log("Pieza Creada");
}; // end object

/************************Resete Board***********************/

function resetBoard() {
  for (let y = 0; y < 21; y++) {
    for (let x = 0; x < 12; x++) {
      board[y][x] = tableroCopia[y][x];
    }
  }
  log("RESET");
}

/************************Draw Board************************/

function drawBoard() {
  for (let y = topMargin; y < boardHeight; y++) {
    for (let x = 1; x < boardWidth + 1; x++) {
      let color = null;
      if (board[y][x] != 0) {
        switch (board[y][x]) {
          case 1:
            color = red;
            break;
          case 2:
            color = purple;
            break;
          case 3:
            color = orange;
            break;
          case 4:
            color = yellow;
            break;
          case 5:
            color = green;
            break;
          case 6:
            color = cyan;
            break;
          case 7:
            color = blue;
            break;

          default:
            break;
        }
        ctx.fillStyle = color;
        ctx.fillRect((x - 1) * pieceWidth, (y - topMargin) * pieceHeight, pieceWidth, pieceHeight);
      }
    }
  }
}

/************************Initialize keyboard************************/

function initializeKeyboard() {
  document.addEventListener("keydown", (tecla) => {
    switch (tecla.keyCode) {
      case 32:
        piece.rotar();
        break;
      case 40:
        piece.down();
        break;
      case 37:
        piece.left();
        break;
      case 39:
        piece.right();
        break;

      default:
        break;
    }
  });
}

function cleanCanvas() {
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}

(function inicializa() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;

  piece = new objectPiece();
  initializeKeyboard();
  boardConstructor();

  setInterval(() => {
    principal();
  }, 1000 / FPS);
})();

function principal() {
  cleanCanvas();
  drawBoard();
  piece.drawPiece();
  piece.fall();
}

table(board);
