class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const cache: Map<string,number> = new Map<string,number>(); 

        const dfs = (day: number, selling: number): number => {
            const key: string = `${day},${selling}`
            if (cache.has(key)) return cache.get(key)
            if (day >= prices.length) {
                return 0;
            }
            let res: number = -1
            if (selling === 0) {
                res = Math.max(dfs(day + 1, 1) - prices[day], dfs(day + 1, 0) )

            } else {
                res = Math.max(dfs(day + 2, 0) + prices[day], dfs(day + 1, 1))
            }
            cache.set(key,res)
            return res;
        }

        return dfs(0,0)
    }
}
