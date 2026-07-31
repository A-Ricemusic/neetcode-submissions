class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let l: number = 0;
        let total: number = 0;
        let res: number = Infinity;

        for (let r = 0; r < nums.length; r++) {
            total += nums[r]
            while (total >= target) {
                res = Math.min(res, r - l + 1);
                total -= nums[l];
                l++;
            }
        }
        return res === Infinity? 0 : res;
    }
}
