class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let prefixSum: Record<number, number> = {};
        prefixSum[0] = 1;
        let res: number = 0;
        let currSum: number = 0;

        for (const num of nums) {
            currSum += num;
            const diff: number = currSum - k
            if (diff in prefixSum) {
                res += prefixSum[diff]
            } 
            prefixSum[currSum] = (prefixSum[currSum] || 0) + 1;
        }
        return res
    }
}
