class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const res = Array.from({length: numRows}, (_,i) => new Array(i + 1).fill(1))

        for (let i = 2; i < numRows; i++) {
            for (let j = 1; j < res[i].length - 1; j++) {
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
            }
        }

        return res;
    }
}
