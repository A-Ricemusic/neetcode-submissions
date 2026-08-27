class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * 
     * 
     * n = nums.length
     * m = target
     * time = o(n * m)
     * space = o(m)
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
