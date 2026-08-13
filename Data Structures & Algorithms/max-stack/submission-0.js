


class MaxStack {
    constructor() {
        this.stack = []
        this.heap = new PriorityQueue((a,b) => b - a)
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x);
        this.heap.enqueue(x);
    }

    /**
     * @return {number}
     */


    pop() {
        const num1 = this.stack.pop()
        let num2 = this.heap.dequeue()
        const arr = []

        while (num1 !== num2) {
            arr.push(num2)
            num2 = this.heap.dequeue()
        }

        for (const num of arr) {
            this.heap.enqueue(num)
        }

        return num1
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    peekMax() {
        return this.heap.front()
    }

    /**
     * @return {number}
     */

   

    popMax() {
        const maxNum = this.heap.dequeue()
        let currNum = this.stack.pop()
        const arr = []

        while (maxNum !== currNum) {
            arr.push(currNum)
            currNum = this.stack.pop()
        }

        for (const num of arr) {
            this.stack.push(num)
        }

        return maxNum;
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
