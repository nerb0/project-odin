class ListNode {
  value: string;
  next: ListNode | null;
  constructor(value: string, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}
export class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: string) {
    if (!this.tail) {
			const node = new ListNode(value);
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    }
  }
  prepend(value: string) {
    if (!this.head) {
			const node = new ListNode(value);
      this.head = node;
      this.tail = node;
    } else {
      const prevHead = this.head;
      this.head = new ListNode(value);
      this.head.next = prevHead;
    }
  }
  at(index: number) {
    let node = this.head;
    let i = 0;
    while (node) {
      if (i == index) {
        return node;
      } else {
        i += 1;
        node = node.next;
      }
    }
		return null
  }
  pop() {
		const prevTail = this.tail;
		if (this.head == this.tail) {
			this.tail = null;
			this.head = null;
			return prevTail;
		}

    let node = this.head;
    while (node) {
			if (node.next == this.tail) {
				node.next = null;
				this.tail = node;
				return prevTail;
			}
      node = node.next;
    }
		return prevTail;
  }
  contains(value: string) {
    let node = this.head;
    while (node) {
      if (node.value == value) return true;
      node = node.next;
    }
    return false;
  }
  find(value: string) {
    let node = this.head;
    let i = 0;
    while (node) {
      if (node.value == value) return i;
      node = node.next;
      i += 1;
    }
    return -1;
  }
  toString() {
    const res: string[] = [];
    let node = this.head;
    while (node) {
      res.push(`(${node.value})`);
			node = node.next;
    }
    res.push("null");
    return res.join(" -> ");
  }
  insertAt(value: string, index: number) {
		if (index == 0) this.prepend(value);
    let i = 0;
    let node = this.head;
    while (node) {
      if (i + 1 == index) {
        const prevNode = node.next;
        node.next = new ListNode(value, prevNode);
				return;
      }
      i += 1;
      node = node.next;
    }
  }
	removeAt(index: number) {
		if (index == 0) {
			if (this.head) {
				this.head = this.head.next;
				if (this.head == null) {
					this.tail = null;
				}
			}
			return;
		} 
    let i = 0;
    let node = this.head;
    while (node) {
      if (i == index) {
				if (node.next) {
					const temp = node.next;
					node.next = node.next.next;
					return temp;
				} else {
					return null;
				}
      }
      i += 1;
      node = node.next;
    }
		return null;
	}
  size() {
    let i = 0;
    let node = this.head;
    while (node) {
      i += 1;
      node = node.next;
    }
    return i;
  }
}
