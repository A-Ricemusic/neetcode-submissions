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
     * n = number or rows
     * m = number of cols
     * time: o(n + m)
     * space: o(1)
     */
    leftMostColumnWithOne(binaryMatrix) {
        const arr = binaryMatrix.dimensions();
        const rows = arr[0];
        let col = arr[1] - 1;
        let row = 0;
        let res = -1

        while (row < rows && col >= 0) {
            if (binaryMatrix.get(row,col) === 1) {
                res = col
                col--;
            } else {
                row++;
            }
        }
        return res;

    }
}
