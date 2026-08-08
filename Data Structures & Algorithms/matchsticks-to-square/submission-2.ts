class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks: number[]): boolean {

        const total = matchsticks.reduce((a, x) => a + x, 0);
        if (total % 4 !== 0) return false;
        const target = total / 4;

        matchsticks.sort((a, b) => b - a);
        const sums = [0, 0, 0, 0];

        const dfs = (i: number): boolean => {
            if (i === matchsticks.length) return true
            for (let z = 0; z < 4; z++) {
                if (sums[z] + matchsticks[i] > target) continue;
                if (z > 0 && sums[z] === sums[z - 1]) continue;
                sums[z] += matchsticks[i];
                if(dfs(i + 1)) return true;
                sums[z] -= matchsticks[i];
            }
            return false

        }

        return dfs(0)

    }
}
