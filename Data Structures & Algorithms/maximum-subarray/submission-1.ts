class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * [2,-1,3,1,3,4,3,7]
     */
    maxSubArray(nums: number[]): number {
        let currSum: number = 0;
        let res: number = -Infinity;

        for (const num of nums) {
            currSum += num
            res = Math.max(res, currSum)
            if (currSum < 0) {
                currSum = 0
            }
        }

        return res;

    }
}
