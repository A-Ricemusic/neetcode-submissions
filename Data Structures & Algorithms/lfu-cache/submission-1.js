class ListNode {
    constructor(key,val) {
        this.key = key
        this.val = val;
        this.next = null;
        this.prev = null;
        this.freq = 1;
    }
}

class LinkedList {
    constructor() {
        this.dummyHead = new ListNode(0,0);
        this.dummyTail = new ListNode(0,0);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
        this.cnt = 0;
    }

    push(node) {
        const left = this.dummyTail.prev
        const right = this.dummyTail
        left.next = node;
        right.prev = node
        node.prev = left
        node.next = right;
        this.cnt++;
    };

    popLeft() {
        const left = this.dummyHead
        const node = this.dummyHead.next
        const right = node.next;
        node.prev = null;
        node.next = null;
        left.next = right;
        right.prev = left;
        this.cnt--;
        return node;
    };

    pop(node) {
        const left = node.prev;
        const right = node.next;
        left.next = right;
        right.prev = left;
        node.next = null;
        node.prev = null;
        this.cnt--;
    }
}





class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.nodeMap = new Map();
        this.freqMap = new Map();
        this.count = 0;
        this.minFreq = 1;
        this.freqMap.set(1, new LinkedList());
    }

    /**
     * @param {number} key
     * @return {number}
     */

    counter(node) {
        const freq = node.freq;
        const linkedList = this.freqMap.get(node.freq);
        linkedList.pop(node);
        if (freq === this.minFreq && linkedList.cnt === 0) {
            this.minFreq++;
        }
        if (!this.freqMap.has(freq + 1)) {
            this.freqMap.set(freq + 1, new LinkedList());
        }
        const linkedList2 = this.freqMap.get(freq + 1);
        node.freq = freq + 1;
        linkedList2.push(node)


    };

    get(key) {
        if (!this.nodeMap.has(key)) return -1;
        const node = this.nodeMap.get(key);
        this.counter(node)
        return node.val; 
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.nodeMap.has(key)) {
            const node = this.nodeMap.get(key);
            node.val = value;
            this.counter(node);
        } else {
            if (this.count === this.cap) {
                let linkedList1 = this.freqMap.get(this.minFreq);
                const nodeToRemove = linkedList1.popLeft();
                this.nodeMap.delete(nodeToRemove.key);
                this.count--;

            }
            const node = new ListNode(key,value);
            this.nodeMap.set(key, node);
            const linkedList2 = this.freqMap.get(1);
            linkedList2.push(node);
            this.count++;
            this.minFreq = 1

        }
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
