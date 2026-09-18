class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
        
}


class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.dummyHead = new ListNode("");
        this.dummyTail = new ListNode("");
        const node = new ListNode(homepage);
        node.prev = this.dummyHead
        node.next = this.dummyTail;
        this.dummyHead.next = node;
        this.dummyTail.prev = node;
        this.curr = node;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const node = new ListNode(url);
        this.curr.next = node;
        this.dummyTail.prev = node;
        node.next = this.dummyTail;
        node.prev = this.curr;
        this.curr = node;
        return this.curr.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        let curr = this.curr;
        let count = 0;
        while (curr !== this.dummyHead && count !== steps) {
            curr = curr.prev
            count++;
        }
        if (curr === this.dummyHead) {
            this.curr = this.dummyHead.next;
            return this.curr.val;
        }
        this.curr = curr;
        return this.curr.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        let curr = this.curr;
        let count = 0;
        while (curr !== this.dummyTail && count !== steps) {
            curr = curr.next
            count++;
        }
        if (curr === this.dummyTail) {
            this.curr = this.dummyTail.prev;
            return this.curr.val;
        }
        this.curr = curr;
        return this.curr.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
