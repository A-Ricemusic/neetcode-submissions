class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     * [0,4,-1,0,-3]
     * [[1, 4], [2,-4], [2,3], [4 -3]]
     * trips = [[4,1,2],[3,2,4]], capacity = 4
     */
    carPooling(trips, capacity) {
        let end = 0
        for (const [w,s,e] of trips) {
            end = Math.max(end,e)
        }
        const travel = new Array(end + 1).fill(0)
        for (const [w,s,e] of trips) {
            travel[s] += w
            travel[e] += -w
        }
        let curr = 0
        for (const t of travel) {
            curr += t
            if (curr > capacity) {
                return false;
            }
        }

        return true;
    }
}
