class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.dummy = new ListNode(0);
    }

    /**
     * @param {number} index
     * @return {number}
     */
    getNode(index) {
        let curr = this.dummy;
        let cnt = -1;
        while (curr && cnt < index) {
            curr = curr.next;
            cnt++;
        }
        return curr;

    }
    get(index) {
        const node = this.getNode(index);
        return node !== null? node.val : -1; 
        
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new ListNode(val);
        const head = this.dummy.next;
        node.next = head;
        this.dummy.next = node;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let curr = this.dummy
        const node = new ListNode(val);
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = node;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        const prev = this.getNode(index - 1);
        if (prev === null || prev.next === null) return false;
        const nodeToRemove = prev.next;
        const nxt = nodeToRemove.next;
        prev.next = nxt;
        nodeToRemove.next = null;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        let curr = this.dummy.next;
        while (curr !== null) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}
