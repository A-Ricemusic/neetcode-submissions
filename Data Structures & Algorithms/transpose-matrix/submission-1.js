class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const res = Array.from({length: cols}, () => new Array(rows).fill(0))

        for (let r = 0; r < rows; r++)  {
            for (let c = 0; c < cols; c++) {
                res[c][r] = matrix[r][c]
            }
        }

        return res;

    }
}
