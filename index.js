import { LEVEL, OBJECT_TYPE } from './setup';
import GameBoard from './GameBoard';


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

}

function startGame() {

}
