class Solution {
    splitArraySameAverage(nums) {
        const memo = new Map();
        const n = nums.length;
        const total = nums.reduce((a,b) => a + b, 0);

        const dfs = (i, a, s) => {
            const key = `${i},${a},${s}`;
            if (memo.has(key)) return memo.get(key);
            if (a === 0) return s === 0;
            if (i === n || a < 0) return false;
            const res = dfs(i + 1, a, s) || dfs(i + 1, a - 1, s - nums[i]);
            memo.set(key, res)
            return res;
            
        };

        for (let a = 1; a <= Math.floor(n / 2); a++) {
            if ((total * a) % n === 0) {
                if (dfs(0,a,Math.floor((total * a) / n ))) return true
            }
        }
        return false
    }
}
