class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix: number[][]): number {
        let res: number = 0;
        const rows: number = matrix.length;
        const cols: number =  matrix[0].length;
        const dp: number[][] = Array.from({length: rows}, () => new Array(cols).fill(-1));

        const dfs = (r: number, c: number, prev: number) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || matrix[r][c] <= prev) {
                return 0;
            }

            if (dp[r][c] !== -1) {
                return dp[r][c]
            }

            dp[r][c] = Math.max(dfs(r + 1,c,matrix[r][c]), 
            dfs(r - 1,c,matrix[r][c]),
            dfs(r,c + 1,matrix[r][c]),
            dfs(r,c - 1,matrix[r][c])) + 1
            res = Math.max(res,dp[r][c])
            return dp[r][c]


        }



        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r,c,-1)
            }
        }

        return res
    }
}
