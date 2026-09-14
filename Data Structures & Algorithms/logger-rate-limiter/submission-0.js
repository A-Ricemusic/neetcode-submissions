class Logger {
    constructor() {
        this.hashMap = new Map()
    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        if (!this.hashMap.has(message)) {
            this.hashMap.set(message,timestamp)
            return true;
        }

        const time = this.hashMap.get(message);
        
        if (timestamp - 10 >= time) {
            this.hashMap.set(message,timestamp)
            return true;
        }
        return false;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
