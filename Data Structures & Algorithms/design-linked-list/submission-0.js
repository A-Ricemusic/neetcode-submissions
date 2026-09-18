class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class MyLinkedList {
    constructor() {
        this.dummyHead = new ListNode(-1);
        this.dummyTail = new ListNode(-1);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     * 
     * n = number of nodes in list
     * time: O(n) in worst case
     */
    
    getPrev(index) {
        if (index < 0) return -1;
        let count = 0;
        let curr = this.dummyHead.next
        while (count !== index && curr) {
            curr = curr.next
            count++;
        }
        if (!curr || curr.prev === this.dummyHead) return -1
        return curr.prev.val
    }

    /**
     * @param {number} index
     * @return {number}
     * n = number of nodes in list
     * time: O(n) in worst case
     */
    get(index) {
        if (index < 0) return -1;
        let count = 0;
        let curr = this.dummyHead.next
        while (count !== index && curr) {
            curr = curr.next
            count++;
        }
        if (!curr || curr === this.dummyTail) return -1
        return curr.val
    }

    /**
     * @param {number} val
     * @return {void}
     * time: O(1)
     */
    addAtHead(val) {
        const node = new ListNode(val)
        const left = this.dummyHead
        const right = this.dummyHead.next
        left.next = node;
        right.prev = node;
        node.next = right;
        node.prev = left;
    }

    /**
     * @param {number} val
     * @return {void}
     * time: O(1)
     */
    addAtTail(val) {
        const node = new ListNode(val)
        const right = this.dummyTail
        const left = this.dummyTail.prev
        left.next = node;
        right.prev = node;
        node.next = right;
        node.prev = left;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     * n = number of nodes in list
     * time: O(n) in worst case
     */
    addAtIndex(index, val) {
        if (index < 0) return;
        let count = 0;
        let curr = this.dummyHead.next
        while (count !== index && curr) {
            curr = curr.next
            count++;
        }
        if (curr === this.dummyTail) {
            this.addAtTail(val);
            return;
        }
        if (!curr) return;
        const node = new ListNode(val)
        const right = curr;
        const left = curr.prev;
        left.next = node;
        right.prev = node;
        node.next = right;
        node.prev = left;
    }

    /**
     * @param {number} index
     * @return {void}
     * n = number of nodes in list
     * time: O(n) in worst case
     */
    deleteAtIndex(index) {
        if (index < 0) return;
        let count = 0;
        let curr = this.dummyHead.next
        while (count !== index && curr) {
            curr = curr.next
            count++;
        }
        if (!curr || curr === this.dummyTail) return;
        const left = curr.prev
        const right = curr.next
        left.next = right;
        right.prev = left;
        curr.next = null;
        curr.prev = null;
    }
}
