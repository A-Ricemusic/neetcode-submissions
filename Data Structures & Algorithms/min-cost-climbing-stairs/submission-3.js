class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     * cost = [1,2,1,2,1,1,1]
     *   dp = [1,2,2,4,3,4,4] 
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        let prev = cost[0];
        let curr = cost[1];
        for (let i = 2; i < n; i++) {
            const tmp = curr;
            curr = cost[i] + Math.min(curr,prev);
            prev = tmp
        }
        return Math.min(curr, prev)
    }
}
