class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return nums[0];

        let prev = nums[0]
        let curr = Math.max(nums[0], nums[1])
        for (let i = 2; i < n; i++) {
            const tmp = curr
            curr = Math.max(curr, nums[i] + prev)
            prev = tmp
        }

        return curr

    }
}
