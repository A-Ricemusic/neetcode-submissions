class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a: number, b: number): number {
        while (b !== 0) {
            let carry: number = (a & b) << 1;
            a ^= b;
            b = carry;
        }
        return a
    }
}
