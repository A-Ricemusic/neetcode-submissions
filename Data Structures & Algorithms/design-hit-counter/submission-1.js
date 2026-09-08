class HitCounter {
    constructor() {
        this.queue = new Queue()
    }

    /**
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp) {
        this.queue.enqueue(timestamp)
    }

    /**
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp) {
        let lower = timestamp - 300
        if (lower < 0) {
            lower = 0;
        }
        while (this.queue.size() > 0 && this.queue.front() <= lower) {
            this.queue.dequeue()
        }

        return this.queue.size();
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
