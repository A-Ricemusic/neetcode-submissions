class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        const res = Array.from({length: rowIndex + 1}, (_,i) => new Array(i + 1).fill(1));


        for (let i = 2; i < rowIndex + 1; i++) {
            for (let j = 1; j < i; j++) {
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
            }
        }

        return [...res[rowIndex]]
    }
}
