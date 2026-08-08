class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const n: number = cost.length
        let curr: number = cost[1];
        let prev: number = cost[0];

        for (let i = 2; i < n; i++) {
            cost[i] = cost[i] + Math.min(curr, prev)
            curr = cost[i]
            prev = cost[i - 1]
        }
        return Math.min(prev,curr)
    }
}
