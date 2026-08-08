class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const dp: number[] = new Array(n).fill(-1)
        dp[0] = 1;
        dp[1] = 2;

        if (n <= 2) {
            return n
        }


        const dfs = (i: number): number => {
            const num1 = dp[i - 1] !== -1? dp[i - 1] : dfs(i - 1);
            const num2 = dp[i - 2] !== -1? dp[i - 2] : dfs(i - 2);
            dp[i] = num1 + num2
            return dp[i]

        }


        const res: number = dfs(n - 1)
        console.log(dp)
        return res

        

    }
}
