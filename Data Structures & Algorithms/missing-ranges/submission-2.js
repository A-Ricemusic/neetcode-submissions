class Solution {
    /**
     * @param {number[]} nums
     * @param {number} lower
     * @param {number} upper
     * @return {number[][]}
     */
    findMissingRanges(nums, lower, upper) {
        if (nums.length === 0) {
            return [[lower, upper]]
        }

        const res = [];

        if (nums.length === 1) {
            if (nums[0] !== lower) {
                res.push([lower, nums[0] - 1]);
            };
            if (nums.at(-1) !== upper) {
                res.push([nums.at(-1) + 1, upper]);
            };
            return res;
        }
        
        if (nums[0] !== lower) {
            res.push([lower, nums[0] - 1]);
        };

        for (let i = 0; i < nums.length - 1; i++) {
            const num1 = nums[i];
            const num2 = nums[i + 1];
            const dist = num2 - num1;
            if (dist > 1) {
                res.push([num1 + 1, num2 - 1]);
            };
        };

        if (nums.at(-1) !== upper) {
            res.push([nums.at(-1) + 1, upper]);
        };
        return res;
    }
}
