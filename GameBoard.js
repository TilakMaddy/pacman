import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from './setup';

export default class GameBoard {

  constructor(DOMGrid) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }

  createGrid(level) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid.innerHTML = '';
    this.DOMGrid.style.cssText = `
      grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px);
    `;
    console.log(level);
    level.forEach(squareValue => {
      const div = document.createElement('div');
      div.classList.add('square', CLASS_LIST[squareValue]);
      div.style.cssText = `
        width: ${CELL_SIZE}px;
        height: ${CELL_SIZE}px;
      `;
      this.DOMGrid.append(div);
      this.grid.push(div);
      if(OBJECT_TYPE.DOT == CLASS_LIST[squareValue])
        this.dotCount++;
    });

  }

  addObject(pos, classes) {
    this.grid[pos].classList.add(...classes);
  }

  removeObject(pos, classes) {
    this.grid[pos].classList.remove(...classes);
  }

  objectExists(pos, object) {
    return this.grid[pos].classList.contains(obejct);
  }

  rotateDiv(pos, deg) {
    this.grid[pos].style.transform = `rotate(${deg}deg)`;
  }

  showGameStatus(gameWin) {
    const div = document.createElement('div');
    div.classList.add('status');
    div.innerHTML = `
      ${gameWin ? 'WIN !' : 'GAME OVER' }
    `;
    this.DOMGrid.append(div);
  }

  static createGameboard(DOMGrid, level) {
    const board = new this(DOMGrid);
    board.createGrid(level);
    return board;
  }

};