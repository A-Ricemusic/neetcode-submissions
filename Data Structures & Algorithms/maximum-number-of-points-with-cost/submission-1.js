class Solution {
    maxPoints(points) {
        const rows = points.length;
        const cols = points[0].length;
        let prev = points[0].map((e) => e);
        for (let r = 1; r < rows; r++) {
            let cur = new Array(cols).fill(0);
            cur[0] = prev[0];
            for (let c = 1; c < cols; c++) {
                cur[c] = Math.max(prev[c], cur[c - 1] - 1);
            }
            let rightMax = prev[cols - 1];
            for (let c = cols - 2; c >= 0; c--) {
                rightMax = Math.max(prev[c], rightMax - 1);
                cur[c] = Math.max(cur[c], rightMax) + points[r][c];
            }
            cur[cols - 1] += points[r][cols - 1];
            prev = cur;
        }

        return Math.max(...prev);
    }
}
