class Solution {
    /**
     * @param {number[]} coins
     * @param {number} maxJump
     * @return {number[]}
     * m = maxJumps
     * n = coins.length
     * time: O(m^n)
     * space: o(n)
     */
    cheapestJump(coins, maxJump) {
        let res = [];
        let minAmt = Infinity;
        const n = coins.length;
        let cache = new Map()

        const dfs = (i,amt,curr) => {
            if (i === n - 1) {
                if (amt < minAmt) {
                    minAmt = amt
                    res = [...curr, i + 1]
                }
                return;
            }

            if (cache.has(i) && cache.get(i) <= amt) return

            cache.set(i,amt)
            curr.push(i + 1)
            for (let j = 1; j <= maxJump; j++) {
                if (i + j >= n) break;
                if (coins[i + j] === -1) continue;
                dfs(i + j,amt + coins[i],curr)
            }
            curr.pop()

        }

        dfs(0,0,[]);
        return res
    }
}
