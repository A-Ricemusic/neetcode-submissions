class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix: number[][]): number {
        let res: number = 0;
        const rows: number = matrix.length;
        const cols: number = matrix[0].length;
        const dp: number[][] = Array.from({length: rows}, () => new Array(cols).fill(-1));
        const dfs = (r: number, c: number, prev: number) => {

            if (r < 0 || r >= rows || c < 0 || c >= cols || prev >= matrix[r][c]) {         
                return 0;
            }
            if (dp[r][c] !== -1) {
                return dp[r][c]
            }
            const path1: number = dfs(r + 1, c, matrix[r][c])
            const path2: number = dfs(r - 1, c, matrix[r][c])
            const path3: number = dfs(r, c + 1, matrix[r][c])
            const path4: number = dfs(r, c - 1, matrix[r][c])
            dp[r][c] = Math.max(path1, path2,path3,path4) + 1
            res = Math.max(res,dp[r][c])
            return dp[r][c]
            
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r,c,-1)
            }
        }
        

        return res
    }
}
