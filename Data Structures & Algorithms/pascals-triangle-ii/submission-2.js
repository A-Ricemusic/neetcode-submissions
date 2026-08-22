class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        if (rowIndex === 0) {
            return [1];
        }
        if (rowIndex === 1) {
            return [1,1];
        }

        let prev = [1,1] 
        for (let i = 2; i < rowIndex + 1; i++) {
            let curr = new Array(i + 1).fill(1);
            for (let j = 1; j < i; j++) {
                curr[j] = prev[j - 1] + prev[j];
            }
            [curr,prev] = [prev,curr];
        }

        return prev;
    }
}
