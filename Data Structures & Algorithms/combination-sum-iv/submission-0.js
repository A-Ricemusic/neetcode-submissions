class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * 
     * dfs(0) => dfs(3) + dfs(1) + dfs(2) = 1 + 4 + 2 = 7
     * dfs(1) => dfs(4) + dfs(2) + dfs(3) = 4
     * dfs(2) => dfs(5) + dfs(3) + dfs(4) = 2
     * dfs(3) => dfs(6) + dfs(4) + dfs(5) = 1
     * 
     * n = nums.length
     * m = target
     * time = o(n * m)
     * space = o(n * m)
     * 
     */
    combinationSum4(nums, target) {
        const memo = new Map();
        const dfs = (sum) => {
            if (sum > target) return 0;
            if (sum === target) return 1;
            if (memo.has(sum)) return memo.get(sum);
            let res = 0;
            for (const num of nums) {
                res += dfs(sum + num);
            };
            memo.set(sum,res)
            return res;
        }


        return dfs(0)
    }
}
