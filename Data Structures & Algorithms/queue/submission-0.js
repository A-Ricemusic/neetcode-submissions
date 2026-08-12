class MyDeque {
    constructor() {
        this.q = []
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.q.length === 0
    }

    /**
     * @param {number} value
     */
    append(value) {
        this.q.push(value)
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        this.q.unshift(value)
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.q.length === 0) return -1
        return this.q.pop()
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.q.length === 0) return -1
        return this.q.shift()
    }
}
