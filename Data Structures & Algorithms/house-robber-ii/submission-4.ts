class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length < 2) return Math.max(...nums);
        let numsCopy1: number[] = [...nums]
        numsCopy1.shift()
        let numsCopy2: number[] = [...nums]
        numsCopy2.pop()
        return Math.max(this.houseRob(numsCopy1),this.houseRob(numsCopy2))
        
    }

    houseRob(nums: number[]): number {
        const dp: number[] = new Array(nums.length).fill(-1);
        if (nums.length < 2) return Math.max(...nums);
        dp[0] = nums[0]
        dp[1] = Math.max(nums[0], nums[1])

        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
        }
       return dp[nums.length - 1];
    }
}
