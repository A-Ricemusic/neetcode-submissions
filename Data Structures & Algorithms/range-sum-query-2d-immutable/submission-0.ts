class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    prefixSum: number[][]
    constructor(matrix: number[][]) {
        this.prefixSum = Array.from({ length: matrix.length + 1 }, () => 
            Array(matrix[0].length + 1).fill(0)
        );

        for (let r = 0; r < matrix.length; r++) {
            let prefix: number = 0;
            for (let c = 0; c < matrix[0].length; c++) {
                prefix += matrix[r][c];
                const above: number = this.prefixSum[r][c + 1]
                this.prefixSum[r + 1][c + 1] = prefix + above
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        row1 = row1 + 1;
        row2 = row2 + 1;
        col1 = col1 + 1;
        col2 = col2 + 1;

        const bottemRight: number = this.prefixSum[row2][col2];
        const above: number = this.prefixSum[row1 - 1][col2];
        const l: number = this.prefixSum[row2][col1 - 1];
        const topL: number = this.prefixSum[row1 - 1][col1 - 1];

        return bottemRight - above - l + topL;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
