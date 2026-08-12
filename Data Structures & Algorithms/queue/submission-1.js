class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}



class MyDeque {
    constructor() {
        this.dummyHead = new Node(-1);
        this.dummyTail = new Node(-1);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.dummyHead.next === this.dummyTail
    }

    /**
     * @param {number} value
     */
    append(value) {
        const tmp = this.dummyTail.prev
        const newNode = new Node(value)
        this.dummyTail.prev = newNode
        tmp.next = newNode
        newNode.next = this.dummyTail
        newNode.prev = tmp
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const tmp = this.dummyHead.next
        const newNode = new Node(value)
        this.dummyHead.next = newNode
        tmp.prev = newNode
        newNode.next = tmp
        newNode.prev = this.dummyHead 
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) return -1
        const node = this.dummyTail.prev
        const prev = node.prev
        prev.next = this.dummyTail
        this.dummyTail.prev = prev
        return node.val;
    }

    /**
     * @return {number}
     */
    popleft() {
         if (this.isEmpty()) return -1
        const node = this.dummyHead.next;
        const next = node.next
        this.dummyHead.next = next
        next.prev = this.dummyHead
        return node.val
    }
}
