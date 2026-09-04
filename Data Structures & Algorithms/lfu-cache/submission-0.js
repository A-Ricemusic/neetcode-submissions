class ListNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.freq = 1
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.left = new ListNode(0,0)
        this.right = new ListNode(0,0)
        this.left.next = this.right;
        this.right.prev = this.left;
        this.size = 0;
    }

    length() {
        return this.size
    }

    pushRight(node) {
        const tail = this.right.prev;
        tail.next = node;
        this.right.prev = node;
        node.prev = tail;
        node.next = this.right;
        this.size++;
    }

    pop(node) {
        const right = node.next;
        const left = node.prev;
        right.prev = left;
        left.next = right;
        node.next = null;
        node.prev = null;
        this.size--;
    }

    popLeft() {
        const node = this.left.next;
        const next = node.next;
        this.left.next = next;
        next.prev = this.left;
        node.next = null;
        node.prev = null;
        this.size--;
        return node;
    }
}






class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.lfuCount = 0;
        this.nodeMap = new Map();
        this.listMap = new Map();
    }

    counter(node) {
        const count = node.freq;
        this.listMap.get(count).pop(node);
        if (count === this.lfuCount && this.listMap.get(count).length() === 0) this.lfuCount++;
        node.freq++;
        if (!this.listMap.has(node.freq)) {
            this.listMap.set(node.freq, new LinkedList());
        }
        this.listMap.get(node.freq).pushRight(node);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.nodeMap.has(key)) return -1;
        const node = this.nodeMap.get(key);
        this.counter(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.capacity === 0) return;

        if (this.nodeMap.has(key)) {
            const node = this.nodeMap.get(key);
            node.val = value;
            this.counter(node);
            return;
        }

        if (this.nodeMap.size === this.capacity) {
            const toRemove = this.listMap.get(this.lfuCount).popLeft();
            this.nodeMap.delete(toRemove.key);
        }
        const node = new ListNode(key,value);
        this.nodeMap.set(key, node);
        if (!this.listMap.has(1)) {
            this.listMap.set(1, new LinkedList())
        }
        this.listMap.get(1).pushRight(node);
        this.lfuCount = 1;
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
