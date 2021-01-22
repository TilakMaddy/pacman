import { DIRECTIONS, OBJECT_TYPE, GRID_SIZE } from './setup';
import PacQueue from './PacmanQueue';

// Primitive random movement.
export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;
  // Create an array from the diretions objects keys
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
    // Get a random key from that array
    const key = keys[Math.floor(Math.random() * keys.length)];
    // Set the new direction
    dir = DIRECTIONS[key];
    // Set the next move
    nextMovePos = position + dir.movement;
  }

  return { nextMovePos, direction: dir };
}

// ! Breadth First Search from ghost to pacman to make the best next step
export function bestBFSMovement(position, direction, objectExist) {
  return { nextMovePos: bfs(position, objectExist), direction };
}

// ! Too computationally heavy causes browser to crash

function bfs(ghostPos, objectExists) {

  const N = GRID_SIZE * GRID_SIZE;

  const q = new PacQueue();
  let visited = Array(N).fill(false);
// let distance = Array(N).fill(Number.POSITIVE_INFINITY);
  let backtrack = Array(N).fill(-1);

  let foundPacman = false;
  let pacmanPos = -1;

  visited[ghostPos] = true;
  backtrack[ghostPos] = -2;
  //distance[ghostPos] = 0;
  q.push(ghostPos);

  while(!q.empty()) {

    const pos = q.front();
    q.poll();

    const neighbors = [pos - GRID_SIZE, pos + GRID_SIZE, pos + 1, pos - 1];

    for(let neigh of neighbors) {

      if(neigh < 0 || neigh >= N)
        continue;

      if(
        objectExists(neigh, OBJECT_TYPE.WALL) ||
        objectExists(neigh, OBJECT_TYPE.GHOST)
      )
      continue;

      if(visited[neigh])
        continue;

    //  distance[neigh] = distance[pos] + 1;
      backtrack[neigh] = pos;

      if(objectExists(neigh, OBJECT_TYPE.PACMAN)) {
        foundPacman = true;
        pacmanPos = neigh;
        break;
      }

      q.push(neigh);
    }

    if(foundPacman)
      break;

  }

  if(foundPacman) {

    console.log("found a way to pacman");

    let traceback = [];
    let curr = pacmanPos;

    while(curr != -2) {
      traceback.push(curr);
      curr = backtrack[curr];
    }

    return traceback[traceback.length - 2];

  }

  // we couldnt get to pacman, so stay where you are
  return ghostPos;

}



