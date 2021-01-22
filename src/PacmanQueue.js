
export default class PacQueue {

  constructor() {
    this.pushStack = [];
    this.pullStack = [];
    this.size = 0;
  }

  empty() {
    return this.size == 0;
  }

  push(value) {
    this.pushStack.push(value);
    this.size++;
  }

  front() {
    if(this.pullStack.length > 0) {
      const elem = this.pullStack[this.pullStack.length - 1];
      return elem;
    }
    else if(this.pushStack.length > 0) {
      return this.pushStack[0];
    }
    else {
      console.err("Empty queue being front() ");
      return null;
    }
  }

  poll() {
    if(this.pullStack.length > 0) {
      this.size--;
      const elem = this.pullStack[this.pullStack.length - 1];
      this.pullStack.pop();
      return elem;
    }
    else if(this.pushStack.length > 0) {
      const pushStackLength = this.pushStack.length;
      for(let i = pushStackLength; i--;) {
        const elem = this.pushStack[i];
        this.pushStack.pop();
        this.pullStack.push(elem);
      }
      return this.poll();
    }
    else {
      console.err("Empty queue being polled ");
      return null;
    }
  }

}

// const q = new PacQueue();
// q.push(3);
// q.push(5);
// q.push(4);
// q.push(9);
// q.push(26);

// console.log(q.front());

// q.poll();
// q.poll();

// console.log(q.front());

// console.log("----");

// while(!q.empty()) {
//   const elem = q.front();
//   q.poll();
//   console.log(elem);
// }



