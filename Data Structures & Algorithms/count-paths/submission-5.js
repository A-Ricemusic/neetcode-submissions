class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
	 * m = 3 n = 6
	 * 	 0 1 2 3 4 5
	 * 0|1 1 1 1 1 1 
	 * 1|1 2 3 4 5 6
	 * 2|1 3 6 10 15 21 
	 *   1 3 6 10 15 21
     */
    uniquePaths(m, n) {
		const dp = new Array(n).fill(1);
		for (let i = 1; i < m; i++) {
			for (let j = 1; j < n; j++) {
				dp[j] = dp[j - 1] + dp[j]
			}
		}
		return dp[n - 1]
	}
}
