class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const memo = new Map()
        const n = nums.length
        const dfs = (i, prev) => {
            if (i >= n) return 0;
            const state = `${i},${prev}`;
            if (memo.has(state)) return memo.get(state);
            let res = dfs(i + 1, prev);
            if (nums[i] > prev) {
                res = Math.max(res, dfs(i + 1, nums[i]) + 1)
            }

            memo.set(state, res);
            return res;
        }


        return dfs(0, -Infinity)

    }
}
