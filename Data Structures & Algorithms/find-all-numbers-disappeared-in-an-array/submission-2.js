class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        for (let num1 of nums) {
            let idx = num1 > 0? num1 - 1 : Math.abs(num1) - 1;
            const num2 = nums[idx]
            if (num2 > 0) {
                nums[idx] = -1 * num2
            }
        }
        const res = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                res.push(i + 1)
            }
        }

        return res;

    }
}
