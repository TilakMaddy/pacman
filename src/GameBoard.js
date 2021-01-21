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

  objectExists = (pos, objectT) => {
    return this.grid[pos].classList.contains(objectT);
  }

  rotateDiv(pos, deg) {
    this.grid[pos].style.transform = `rotate(${deg}deg)`;
  }

  moveCharacter(character) {
    if(character.shouldMove()) {

      const { nextMovePos, direction } =
        character.getNextMove(this.objectExists.bind(this));

      const { classesToRemove, classesToAdd } = character.makeMove();

      if(character.rotation && character.nextMovePos !== character.pos) {
        this.rotateDiv(nextMovePos, character.dir.rotation);
        this.rotateDiv(character.pos, 0);
      }

      this.removeObject(character.pos, classesToRemove);
      this.addObject(nextMovePos, classesToAdd);

      character.setNewPos(nextMovePos, direction);
    }
  }

  showGameStatus(gameWin) {
    const div = document.createElement('div');
    div.classList.add('game-status');
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