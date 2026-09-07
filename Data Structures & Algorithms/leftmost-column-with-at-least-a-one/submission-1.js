/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

class Solution {
    /**
     * @param {BinaryMatrix} binaryMatrix
     * @return {number}
     */
    leftMostColumnWithOne(binaryMatrix) {
        const arr = binaryMatrix.dimensions();
        const rows = arr[0];
        const cols = arr[1];
        let res = Infinity;
        for (let row = 0; row < rows; row++) {
            let l = 0;
            let r = cols - 1;
            while (l <= r) {
                const m = Math.floor(l + (r - l) / 2);
                if (binaryMatrix.get(row,m) === 1) {
                    r = m - 1;
                    res = Math.min(res, m)
                } else {
                    l = m + 1;
                }
            }
        }

        return res === Infinity? -1: res

    }
}
