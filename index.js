import { LEVEL, OBJECT_TYPE } from './setup';
import GameBoard from './GameBoard';
import Pacman from './Pacman';


const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");
const gameBoard = GameBoard.createGameboard(gameGrid, LEVEL);

const POWER_PILL_TIME = 10000;
const GLOBAL_SPEED = 80;

// initial setup
let score = 0;
let timer = null;
let gameWin = false;

//keep track whether or not pacman ate the power pill which will be active
// for a certain amount of time

let powerPillActive = false;
let powerPillTimer = null;


function gameOver(pacman, grid) {

}

function checkCollision(pacman, ghosts) {

}

function gameLoop(pacman, ghosts) {
  gameBoard.moveCharacter(pacman);
}

function startGame() {
  gameWin = false;
  powerPillActive = false;
  score = 0;
  startButton.classList.add('hide');

  gameBoard.createGrid(LEVEL);
  const pacman = new Pacman(287, 2);

  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
  document.addEventListener('keydown', e => {
    pacman.handleKeyInput(e, gameBoard.objectExists.bind(gameBoard))
  });

  timer = setInterval(() => {
    gameLoop(pacman)
  }, GLOBAL_SPEED);

}

startButton.addEventListener('click', startGame);