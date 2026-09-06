class Solution {
    /**
     * @param {number[][]} costs
     * @return {number}
     * time: o(n)
     * space: o(1)
     */
    minCost(costs) {
        const n = costs.length;
        let prev = new Array(3).fill(0);
        for (let i = 0; i < n; i++) {
            let curr = new Array(3).fill(0);
            for (let j = 0; j < 3; j++) {
                if (j === 0) {
                   curr[0] = costs[i][0] + Math.min(prev[1], prev[2]) 
                } else if (j === 1) {
                    curr[1] = costs[i][1] + Math.min(prev[0], prev[2]) 
                } else {
                    curr[2] = costs[i][2] + Math.min(prev[0], prev[1]) 
                }
            }
            prev = curr
        }
        return Math.min(...prev)
        
    }
}
