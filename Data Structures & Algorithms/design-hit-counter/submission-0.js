
/*
hits = [1,2,3,300]
*/

class HitCounter {
    constructor() {
        this.hits = []
    }

    /**
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp) {
        this.hits.push(timestamp)
    }

    /**
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp) {
        let lower = timestamp - 300
        if (lower < 0) lower = 0;
        let res = 0;
        for (let i = this.hits.length - 1; i >= 0; i--) {
            if (this.hits[i] > lower) {
                res++;
            } else {
                break;
            }
        }

        return res;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
