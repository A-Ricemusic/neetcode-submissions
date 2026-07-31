class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    prefixSum: number[][];
    constructor(matrix: number[][]) {
        const ROWS: number = matrix.length;
        const COLS: number = matrix[0].length;
        this.prefixSum = Array.from({length: ROWS + 1}, () => 
            new Array(COLS + 1).fill(0)
        );
        
        for (let r = 1; r <= ROWS; r++) {
            let prefix: number = 0;
            for (let c = 1; c <= COLS; c++) {
                const above: number = this.prefixSum[r - 1][c]
                prefix += matrix[r - 1][c - 1]
                this.prefixSum[r][c] = prefix + above
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
        let bottomRight: number = this.prefixSum[row2 + 1][col2 + 1];
        let topRight: number = this.prefixSum[row1][col2 + 1];
        let bottomLeft: number = this.prefixSum[row2 + 1][col1];
        let topLeft: number = this.prefixSum[row1][col1];
        return bottomRight - topRight - bottomLeft + topLeft; 
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
