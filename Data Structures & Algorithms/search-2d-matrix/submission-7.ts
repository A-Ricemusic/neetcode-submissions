class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rows: number = matrix.length;
        let cols: number = matrix[0].length;
        let lRow: number = 0;
        let rRow: number = rows - 1;
        let midRow: number = -1
        

        while (lRow <= rRow) {
            midRow = Math.floor(lRow + (rRow - lRow) / 2)
            if (matrix[midRow][0] < target && target < matrix[midRow][cols - 1]) {
                break;
            } else if (matrix[midRow][0] > target) {
                rRow = midRow - 1
            } else if (matrix[midRow][cols - 1] < target) {
                lRow = lRow + 1
            } else {
                return true
            }
        }

        

        if (lRow > rRow) {
            return false
        }

 
        let l: number = 0;
        let r: number = cols - 1

        while (l <= r) {
            const idx: number = Math.floor(l + (r - l) / 2)
            const mid: number = matrix[midRow][idx] 

            if (mid === target) {
                return true;
            } else if (mid > target) {
                r = idx - 1
            } else {
                l = idx + 1
            }
        }

        return false


    }
}
