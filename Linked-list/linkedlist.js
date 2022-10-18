class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    let node = new Node(data);
    this.size++;
    if (!this.head) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }
  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  size() {
    return this.size;
  }
  headValue() {
    let cur = this.head;
    return cur.data;
  }

  tailValue() {
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    return cur.data;
  }
  at(index) {
    let cur = this.head,
      count = 0;
    while (count != index) {
      cur = cur.next;
      count++;
    }
    return cur.data;
  }
  pop() {
    let cur = this.head,
      pre;
    while (cur.next) {
      pre = cur;
      cur = cur.next;
    }
    pre.next = cur.next;
    this.size--;
  }
  contain(item) {
    let cur = this.head;
    while (cur) {
      if (cur.data === item) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }
  find(item) {
    let cur = this.head,
      count = 0;
    while (cur) {
      if (cur.data === item) {
        return count;
      }
      count++;
      cur = cur.next;
    }
    return null;
  }
  toString() {
    let cur = this.head,
      res = "";
    while (cur) {
      res += ` ( ${cur.data} ) ->`;
      cur = cur.next;
    }
    return res;
  }
  removeAt(index) {
    let cur = this.head,
      pre = cur,
      count = 0;

    while (count !== index) {
      pre = cur;
      cur = cur.next;
      count++;
    }
    pre.next = cur.next;
    this.size--;
  }
  insertAt(data, index) {
    if (index == 0) {
      this.head = new Node(data, this.head);
      this.size++;
    } else if (index >= this.size) {
      let node = new Node(data);
      this.size++;
      if (!this.head) {
        this.head = node;
      } else {
        let temp = this.head;
        while (temp.next) {
          temp = temp.next;
        }
        temp.next = node;
      }
    } else {
      let cur = this.head,
        pre = cur,
        count = 0;

      while (count !== index) {
        pre = cur;
        cur = cur.next;
        count++;
      }
      pre.next = new Node(data, cur);
      this.size++;
    }
  }
}

let list = new linkedList();
list.prepend("a");
list.append("x");
list.prepend("b");
list.append("y");
list.prepend("v");
list.insertAt("q", 30);

console.log(list);
