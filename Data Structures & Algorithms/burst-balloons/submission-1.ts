class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums: number[]): number {
        const arr: number[] = [1, ...nums, 1]
        const n: number= arr.length;
        const memo: number[][] = Array.from({length: n}, () => new Array(n).fill(-1));

        const dfs = (l: number, r: number): number => {
            if (r - l <= 1) return 0;
            if (memo[l][r] !== -1) return memo[l][r];

            let best: number = 0;
            for (let k = l + 1; k < r; k++) {
                const coins = dfs(l,k) + dfs(k,r) + arr[l] * arr[k] * arr[r]
                best = Math.max(best,coins)
            }
            memo[l][r] = best;
            return best
        }

        return dfs(0,n - 1)
    }
}
