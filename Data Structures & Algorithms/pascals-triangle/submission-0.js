class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const res = []
        for (let i = 1; i <= numRows; i++) {
            const arr = new Array(i).fill(0);
            arr[0] = 1
            arr[i - 1] = 1
            res.push(arr)
        }

        for (let i = 2; i < numRows; i++) {
            for (let j = 1; j < res[i].length - 1; j++) {
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
            }
        }

        return res;
    }
}
