class Solution {
    /**
     * @param {number[]} coins
     * @param {number} maxJump
     * @return {number[]}
     * coins = [1,2,2,1], maxJump = 2
     * memo = {
     *  '0,0': [1,3,5]
     * }
     * 
     * 
     * i, amt, arr
     * 
     * {
     * 
     * 
     * }
     * 
     */
    cheapestJump(coins, maxJump) {
        let res = [];
        let minAmt = Infinity;
        const n = coins.length;

        const dfs = (i,amt,curr) => {
            if (i === n - 1) {
                if (amt < minAmt) {
                    minAmt = amt
                    res = [...curr, i + 1]
                }
                return;
            }

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
