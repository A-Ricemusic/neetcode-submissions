class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     * gas = [1,2,3] => 6
     * cost = [2,3,2] => 7
     */
    canCompleteCircuit(gas, cost) {
        const gasSum = gas.reduce((a,b) => a + b, 0);
        const costSum = cost.reduce((a,b) => a + b, 0);
        if (costSum > gasSum) return -1;
        let curr = 0;
        let res = 0;
        for (let i = 0; i < gas.length; i++) {
            if (curr < 0) {
                curr = 0;
                res = i;
            }
            curr += (gas[i] - cost[i])
        }

        return res;

    }
}
