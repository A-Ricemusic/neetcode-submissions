class MinStack {
    constructor() {
        this.stack = []
        this.min = Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (val < this.min) {
            this.min = val
        }
        this.stack.push([val, this.min])
    }

    /**
     * @return {void}
     */
    pop() {
        const [val, _] = this.stack.pop()
        if (val === this.min) {
            this.min = this.stack.length === 0? Infinity : this.stack[this.stack.length - 1][1]
        }
 
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1][1]
    }
}
