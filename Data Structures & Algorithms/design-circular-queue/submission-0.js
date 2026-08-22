class ListNode {
    constructor(val = 0) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.cap = k;
        this.dummyHead = new ListNode(0);
        this.dummyTail = new ListNode(0);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
        this.length = 0;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.length === this.cap) return false;
        const node = new ListNode(value);
        const prev = this.dummyTail.prev;
        prev.next = node;
        this.dummyTail.prev = node;
        node.prev = prev;
        node.next = this.dummyTail;
        this.length += 1;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.length === 0) return false;
        const node = this.dummyHead.next;
        const next = node.next;
        this.dummyHead.next = next;
        next.prev = this.dummyHead;
        node.next = null;
        node.prev = null;
        this.length -= 1
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        return this.length === 0 ? -1 : this.dummyHead.next.val;
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.length === 0 ? -1 : this.dummyTail.prev.val;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.length === this.cap;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
