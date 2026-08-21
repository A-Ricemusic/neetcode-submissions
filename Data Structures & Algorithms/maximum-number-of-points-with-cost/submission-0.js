class Solution {
    maxPoints(points) {
        const rows = points.length;
        const cols = points[0].length;
        const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (r === 0) {
                    dp[r][c] = points[r][c];
                } else {
                    let val = -Infinity;
                    for (let i = 0; i < cols; i++) {
                        val = Math.max(val, dp[r - 1][i] - Math.abs(i - c));
                    }
                    dp[r][c] = val + points[r][c];
                }
            }
        }

        return Math.max(...dp[rows - 1]);
    }
}
