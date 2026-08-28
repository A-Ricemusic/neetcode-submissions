class Solution {
    /**
     * @param {number[][]} mat1
     * @param {number[][]} mat2
     * @return {number[][]}
     * mat1 = [
     *  [1,  -5]
     * ]
     * 
     * mat2 = [
     *  [12]
     *  [-1]
     * ]
     */
    multiply(mat1, mat2) {
        const rows1 = mat1.length;
        const cols1 = mat1[0].length;
        const rows2 = mat2.length;
        const cols2 = mat2[0].length;
        const res = Array.from({length: rows1}, () => new Array(cols2).fill(0));

        for (let r1 = 0; r1 < rows1; r1++) {
            for (let c2 = 0; c2 < cols2; c2++) {
                let currVal = 0
                for (let c1 = 0; c1 < cols1; c1++) {
                    const val1 = mat1[r1][c1]
                    const val2 = mat2[c1][c2]
                    currVal += val1 * val2
                }
                res[r1][c2] = currVal
            } 
        }

        return res;
    }
}
