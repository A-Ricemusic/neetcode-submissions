class RandomizedSet {
    constructor() {
        this.set = new Set();

    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.set.has(val)) return false;
        this.set.add(val)
        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.set.has(val)) return false;
        this.set.delete(val);
        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        const arr = [...this.set];
        let randIdx = Math.floor(Math.random(0,arr.length - 1));
        return arr[randIdx]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
