class Solution {
    /**
     * @param {number[]} tickets
     * @param {number} k
     * @return {number}
     */
    timeRequiredToBuy(tickets, k) {
        let head = 0;
        let q = []
        for (let i = 0; i < tickets.length; i++) {
            i === k? q.push([tickets[i], true]) : q.push([tickets[i], false])
        }

        let res = 0;
        while (q.length - head > 0) {
            const [value, isKth] = q[head++]
            res++;
            if (value === 1 && isKth) {
                return res;
            } 
            if (value !== 1) {
                q.push([value - 1, isKth])
            }
        }

        return res;
    }
}
