class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    diagonalSum(mat) {
        const n = mat.length;
        let sum = 0

        for (let i = 0; i < n; i++) {
            sum += mat[i][i]
            sum += mat[i][n - 1 - i]
        }
        if (n % 2 === 1) {
            const idx = Math.floor(n / 2)
            sum -= mat[idx][idx]
        } 

        return sum;

    }
}
