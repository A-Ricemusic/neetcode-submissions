class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        const n = nums.length;
        const dp = new Map();

        const dfs = (i,m) => {
            if (i === n) {
                return m === 0? 0: Infinity;
            }
            if (m === 0) return Infinity;
            const state = `${i},${m}`;
            if (dp.has(state)) return dp.get(state);
            let res = Infinity;
            let currSum = 0

            for (let j = i; j <= n - m; j++) {
                currSum += nums[j];
                res = Math.min(res, Math.max(currSum, dfs(j + 1,m - 1)))
            }

            dp.set(state, res);
            return res;
        }



        return dfs(0,k)
    }
}
