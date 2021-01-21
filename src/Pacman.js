import { OBJECT_TYPE, DIRECTIONS } from "./setup";

export default class Pacman {

  constructor(pos, speed) {

    this.pos = pos;
    this.speed = speed;
    this.dir = null;
    this.timer = 0;
    this.powerPill = false;
    this.rotation = true; // we will rotate when we change direction

  }

  shouldMove() {

    if(!this.dir) return false;

    if(this.timer === this.speed) {
      this.timer = 0;
      return true;
    }

    this.timer++;
  }

  getNextMove(objectExists) {

    let nextMovePos = this.pos + this.dir.movement;

    if(
      objectExists(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExists(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
    ) {
      nextMovePos = this.pos;
    }

    return {
      nextMovePos, direction: this.dir
    }

  }

  makeMove() {
    const classesToRemove = [OBJECT_TYPE.PACMAN];
    const classesToAdd = [OBJECT_TYPE.PACMAN];
    return  { classesToRemove, classesToAdd };
  }

  setNewPos(pos){
    this.pos = pos;
  }

  handleKeyInput(e, objectExists) {

    if(!(e.keyCode >= 37 && e.keyCode <= 40))
      return;

    const dir = DIRECTIONS[e.key];
    const nextMovePos = this.pos + dir.movement;

    if(objectExists(nextMovePos, OBJECT_TYPE.WALL)
        || objectExists(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
     )
      return;

    this.dir = dir;

  }

}