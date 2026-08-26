class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * nums = [2,9,8,3,6]
     * 
     * [
     *  dfs(0) = dfs(1),2 + dfs(2)  => 15, 16 => 16
     *  dfs(1) = dfs(2),9 + dfs(3)  => 14, 15 => 15
     *  dfs(2) = dfs(3), 8 + dfs(4) => 6, 14 => 14
     *  dfs(3) = dfs(4), 3 + dfs(5) => 6, 3 => 6
     *  dfs(4) = dfs(5), 6 + dfs(6) => 0, 6 => 6
     *  dfs(5) = 0
     *  dfs(6) = 0
     * 
     * ]
     */
    rob(nums) {
        const n = nums.length;
        const memo = new Map();

        const dfs = (i) => {
            if (i >= n) return 0;
            if (memo.has(i)) return memo.get(i);
            const take = nums[i] + dfs(i + 2)
            const skip = dfs(i + 1)
            const res = Math.max(take,skip)
            memo.set(i, res)
            return res;
        }


        return dfs(0)
    }
}
