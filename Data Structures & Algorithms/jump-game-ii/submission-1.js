class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        const n = nums.length;
        const dp = new Array(n).fill(0);
        if (n === 1) return 0;

        for (let i = nums.length - 2; i >= 0; i--) {
            let jumps = Infinity;
            for (let j = i + 1; j <= i + nums[i]; j++) {
                if (j >= n) break;
                jumps = Math.min(jumps,dp[j]);
            }
            dp[i] = jumps + 1;
        }

        return dp[0]

    }
}
