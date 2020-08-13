let log = console.log;
let table = console.table;

window.addEventListener("resize", () => {
  let widthWindows = innerWidth;
  let heightWindows = innerHeight;
  log(widthWindows);
  log(heightWindows);
});

let canvas;
let ctx;
let FPS = 8000;
let piece = null;

let canvasWidth = 400;
let canvasHeight = 640;

let boardWidth = 10; // It is Y the widht of the board
let boardHeight = 20; // It is X the height of the board

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
  for (let y = 0; y < boardHeight + 1; y++) {
    let arrow = [];
    let column = null;
    for (let x = 0; x < boardWidth + 2; x++) {
      if (y === boardHeight || x === 0 || x === boardWidth + 1) {
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
// let tableroCopia = [
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// ];

/******************************Creando objeto********************************/

let objectPiece = function () {
  // Creación de un objeto
  this.x = 4;
  this.y = 0;
  this.angle = 0;
  this.type = 0; // tipo de pieza
  this.delay = 50;
  this.frame = 0;

  this.newPiece = function () {
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
      if (this.collision(this.angle, this.y + 1, this.x) === false) {
        this.y++;
        this.frame = 0;
      } else {
        this.fixPiece();
        this.newPiece();
        this.cleanRows();

        if (this.checkIfYouLose()) {
          alert("Game over");
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
    }
  };

  this.down = function () {
    if (this.collision(this.angle, this.y + 1, this.x) == false) {
      this.y++;
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

  /**
   * Esta función revisa línea por línea para verificar si alguna línea tiene algún
   * espacio a 0 o vacio, si encuentra un espacio con cero, full row pasa a ser true
   * La revisión se hace con Y primero y luego se revisa cada posición X
   * Cad posición Y representa una fila a revisar y cada X una columna de esa fila.
   * como sabemos que las 4 primeras filas no es necesario revisarlas, las omitimos
   * indicandole a la Y que empieza por 4 (topMargin), luego que vaya bajando
   * hasta el final.
   * Cuando se encuentra una fila llena, fullRow es true, así que
   * cuando acabe la revisión entrará en el siguiente if
   * esta llena.
   *
   * En esa última parte, lo que hacemos en el ciclo for, es decirle que
   */
  this.cleanRows = function () {
    let fullRow = true;

    for (let y = topMargin; y < boardHeight; y++) {
      fullRow = true;

      for (let x = 1; x <= boardWidth; x++) {
        if (board[y][x] == 0) {
          fullRow = false;
        }
      }

      //Este if se repite internamente hasta que se recorre el boardWidth completamente
      if (fullRow === true) {
        other: for (let x = 1; x <= boardWidth; x++) {
          continue other;
        }

        /**
         * splice: quita la fila completa. y es la fila a quitar
         * y el número la cantidad a quitar. [0] con eso le decimos
         */
        const row = board.splice(y, 1)[0].fill(0);
        log(board[y][0]);
        board.unshift(row);

        for (let y = 0; y <= boardWidth + 2; y++) {
          board[y][boardWidth - boardWidth] = 1;
          board[y][boardWidth + 1] = 1;
        }
        // table(board);
      }
    }
  };

  /************************fix pieces************************/

  this.fixPiece = function () {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (pieces[this.type][this.angle][y][x] > 0) {
          board[this.y + y][this.x + x] = pieces[this.type][this.angle][y][x];
        }
      }
    }
    // table(board);
  };

  this.newPiece();
  log("Pieza Creada");
}; // end object

/************************Resete Board***********************/

function resetBoard() {
  for (let y = 1; y < boardHeight; y++) {
    for (let x = 1; x < boardWidth - 1; x++) {
      board[y][x] = 0;
    }
  }
  table(board);
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

function inicializa() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;

  piece = new objectPiece();
  initializeKeyboard();
  boardConstructor();
  table(board);

  setInterval(() => {
    principal();
  }, 1000 / FPS);
}

function principal() {
  cleanCanvas();
  drawBoard();
  piece.drawPiece();
  piece.fall();
}

/****************************Listening buttons**********/
const startGame = document.getElementById("btnStart");
log(startGame);
startGame.addEventListener("mousedown", (event) => {
  inicializa();
});
