let log = console.log;
let table = console.table;

let canvas;
let ctx;
let FPS = 50;

let anchoCanvas = 400;
let altoCanvas = 640;

let anchoTablero = 10;
let altoTablero = 20;

let margenSuperior = 4; // Para el board

let anchoF = 40;
let altoF = 40;

let rojo = "#FF0000";
let morado = "#800080";
let naranja = "#FF8c00";
let amarillo = "#ffd700";
let verde = "#008000";
let cyan = "#00ced1";
let azul = "#0000cd";

let tablero = [
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

var fichaGrafico = [
  [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  ],

  [
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
    ],

    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
    ],
  ],

  [
    [
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0],
    ],
  ],

  [
    [
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0],
    ],
  ],

  [
    [
      [0, 0, 0, 0],
      [0, 5, 5, 5],
      [0, 5, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 5],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 0, 5],
      [0, 5, 5, 5],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 5, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 0, 0],
    ],
  ],

  [
    [
      [0, 0, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 6],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 6, 6],
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 6, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 6, 6, 0],
      [0, 0, 0, 0],
    ],
  ],

  [
    [
      [0, 0, 0, 0],
      [0, 7, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 7, 0],
      [0, 0, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 7, 0],
      [0, 7, 7, 7],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 7, 0],
      [0, 7, 7, 0],
      [0, 0, 7, 0],
      [0, 0, 0, 0],
    ],
  ],
];

/******************************Creando objeto********************************/

let pieza;

var objPieza = function () {
  // Creación de un objeto
  this.x = 4;
  this.y = 0;
  this.angulo = 0;
  this.tipo = 0;
  this.retraso = 50;
  this.fotograma = 0;

  this.nueva = function () {
    this.tipo = Math.floor(Math.random() * 7);
    this.x = 4;
    this.y = 0;
  };

  this.dibuja = function () {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (fichaGrafico[this.tipo][this.angulo][y][x] != 0) {
          if (fichaGrafico[this.tipo][this.angulo][y][x] == 1) {
            ctx.fillStyle = rojo;
          }
          if (fichaGrafico[this.tipo][this.angulo][y][x] == 2) {
            ctx.fillStyle = morado;
          }
          if (fichaGrafico[this.tipo][this.angulo][y][x] == 3) {
            ctx.fillStyle = naranja;
          }
          if (fichaGrafico[this.tipo][this.angulo][y][x] == 4) {
            ctx.fillStyle = amarillo;
          }
          if (fichaGrafico[this.tipo][this.angulo][y][x] == 5) {
            ctx.fillStyle = verde;
          }
          if (fichaGrafico[this.tipo][this.angulo][y][x] == 6) {
            ctx.fillStyle = cyan;
          }
          if (fichaGrafico[this.tipo][this.angulo][y][x] == 7) {
            ctx.fillStyle = azul;
          }
          ctx.fillRect((this.x + x - 1) * anchoF, (this.y + y - margenSuperior) * altoF, anchoF, altoF);
        }
      }
    }
  };

  this.caer = function () {
    if (this.fotograma < this.retraso) {
      this.fotograma++;
    } else {
      if (this.colision(this.angulo, this.y + 1, this.x) == false) {
        this.y++;
        this.fotograma = 0;
      } else {
        this.fijar();
        this.nueva();
        this.limpiarFilas();

        if (this.compruebaSiPierde()) {
          resetearTablero();
        }
      }
    }
  };

  this.colision = function (anguloNuevo, yNueva, xNueva) {
    let resultado = false;

    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (fichaGrafico[this.tipo][anguloNuevo][y][x] > 0) {
          if (tablero[yNueva + y][xNueva + x] > 0) {
            resultado = true;
          }
        }
      }
    }
    return resultado;
  };

  this.rotar = function () {
    let anguloNuevo = this.angulo;
    if (anguloNuevo < 3) {
      anguloNuevo++;
    } else {
      anguloNuevo = 0;
    }

    if (this.colision(anguloNuevo, this.y, this.x) == false) {
      this.angulo = anguloNuevo;
    }
  };

  this.izquierda = function () {
    if (this.colision(this.angulo, this.y, this.x - 1) == false) {
      this.x--;
      log("Izquierda");
    }
  };

  this.derecha = function () {
    if (this.colision(this.angulo, this.y, this.x + 1) == false) {
      this.x++;
      log("Derecha");
    }
  };

  this.abajo = function () {
    if (this.colision(this.angulo, this.y + 1, this.x) == false) {
      this.y++;
      log("Abajo");
    }
  };

  this.compruebaSiPierde = function () {
    let pierde = false;
    for (let x = 1; x < anchoTablero + 1; x++) {
      if (tablero[2][x] > 0) {
        pierde = true;
      }
    }
    return pierde;
  };

  this.limpiarFilas = function () {
    let filaCompleta = true;

    for (let y = margenSuperior; y < altoTablero; y++) {
      filaCompleta = true;

      for (let x = 1; x <= anchoTablero; x++) {
        if (tablero[y][x] == 0) {
          filaCompleta = false;
        }
      }

      if (filaCompleta == true) {
        log("FIlA LLENA");
        for (let x = 1; x <= anchoTablero; x++) {
          tablero[y][x] = 0;
        }
      }
    }
  };

  this.fijar = function () {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (fichaGrafico[this.tipo][this.angulo][y][x] > 0) {
          tablero[this.y + y][this.x + x] = fichaGrafico[this.tipo][this.angulo][y][x];
        }
      }
    }
  };

  this.nueva();
  log("Pieza Creada");
}; // end object

function resetearTablero() {
  for (let y = 0; y < 21; y++) {
    for (let x = 0; x < 12; x++) {
      tablero[y][x] = tableroCopia[y][x];
    }
  }
  log("RESET");
}

function dibujarTablero() {
  for (let y = margenSuperior; y < altoTablero; y++) {
    for (let x = 1; x < anchoTablero + 1; x++) {
      if (tablero[y][x] != 0) {
        if (tablero[y][x] == 1) {
          ctx.fillStyle = rojo;
        }
        if (tablero[y][x] == 2) {
          ctx.fillStyle = morado;
        }
        if (tablero[y][x] == 3) {
          ctx.fillStyle = naranja;
        }
        if (tablero[y][x] == 4) {
          ctx.fillStyle = amarillo;
        }
        if (tablero[y][x] == 5) {
          ctx.fillStyle = verde;
        }
        if (tablero[y][x] == 6) {
          ctx.fillStyle = cyan;
        }
        if (tablero[y][x] == 7) {
          ctx.fillStyle = azul;
        }
        ctx.fillRect((x - 1) * anchoF, (y - margenSuperior) * altoF, anchoF, altoF);
      }
    }
  }
}

function inicializaTeclado() {
  document.addEventListener("keydown", (tecla) => {
    if (tecla.keyCode == 32) {
      pieza.rotar();
    }
    if (tecla.keyCode == 40) {
      pieza.abajo();
    }
    if (tecla.keyCode == 37) {
      pieza.izquierda();
    }
    if (tecla.keyCode == 39) {
      pieza.derecha();
    }
  });
}

function borrarCanvas() {
  canvas.width = anchoCanvas;
  canvas.height = altoCanvas;
}

(function inicializa() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  canvas.style.width = `${anchoCanvas}px`;
  canvas.style.height = `${altoCanvas}px`;

  pieza = new objPieza();
  inicializaTeclado();

  setInterval(() => {
    principal();
  }, 1000 / FPS);
})();

function principal() {
  borrarCanvas();
  dibujarTablero();
  pieza.dibuja();
  pieza.caer();
}
