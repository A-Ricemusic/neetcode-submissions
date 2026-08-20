class Solution {
    /**
     * @param {number} n
     * @return {number[][]}
     */
    generateMatrix(n) {
        const res = Array.from({length: n}, () => new Array(n).fill(-1))
        const x = n ** 2;
        let top = 0;
        let bottom = n - 1
        let left = 0
        let right = n - 1;
        let curr = 1

        while (curr <= x) {
            for (let i = left; i <= right;i++) {
                res[top][i] = curr;
                curr += 1;
                if (curr > x) break;
            }
            top += 1;
            if (curr > x) break;

            for (let i = top; i <= bottom; i++) {
                res[i][right] = curr;
                curr += 1;
                if (curr > x) break;
            }
            right -= 1;
            if (curr > x) break;

            for (let i = right; i >= left; i--) {
                res[bottom][i] = curr;
                curr += 1;
                if (curr > x) break;
            }

            bottom -= 1;
            if (curr > x) break;

            for (let i = bottom; i >= top; i--) {
                res[i][left] = curr;
                curr += 1;
                if (curr > x) break;
            }
            left += 1

        }

        return res;
        
    }
}
