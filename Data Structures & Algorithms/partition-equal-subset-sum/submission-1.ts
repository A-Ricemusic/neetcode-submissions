class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const total: number = nums.reduce((a,c) => a + c,0)
        if (total % 2 === 1) return false;
        const target: number = total / 2;
        const dp: Map<string,boolean> = new Map<string,boolean>()

        const dfs = (i: number, curr: number):boolean => {
            if (target === curr) {
                return true
            } else if (target < curr) {
                return false
            }
            if (i >= nums.length) return false;
            const key: string = `${i},${curr}`
            if (dp.has(key)) return dp[key];

            const res: boolean = dfs(i + 1, curr) || dfs(i + 1, curr + nums[i])
            dp.set(key,res)
            return res;
        }
        return dfs(0,0)
    }
}
