class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums: number[]): number {
        const arr =[1, ...nums, 1]
        const cache = new Map()

        const dfs = (l: number, r: number) => {
            if (l > r) return 0;
            const key = `${l},${r}`
            if (cache.has(key)) return cache.get(key)
            let best: number = 0
            for (let i = l; i < r + 1; i++) {
                let coins = arr[l - 1] * arr[i] * arr[r + 1];
                coins += dfs(l, i - 1) + dfs(i + 1,r);
                best = Math.max(best,coins)
            }
            cache.set(key,best)

            return cache.get(key)

        }


        return dfs(1, arr.length - 2)
    }
}
