class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.map = {};
        this.size = 0;

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        if (!(key in this.map)) {
            this.size++;
        }
        this.map[key] = value;
        if (this.size >= (this.cap / 2)) {
            this.resize();
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        return (key in this.map)? this.map[key] : -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        if (key in this.map) {
            delete this.map[key];
            this.size--;
            return true;
        }
        return false;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.cap;
    }

    /**
     * @return {void}
     */
    resize() {
        this.cap *= 2;
    }
}
