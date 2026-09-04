class Solution {
    /**
     * @param {number} n
     * @param {number} x
     * @return {number}
     */
    minEnd(n, x) {
        let res = BigInt(x);
        let i_x = 1n;
        let i_n = 1n;
        n = BigInt(n - 1)

        while (i_n <= n) {
            if ((i_x & res) === 0n) {
                if ((i_n & n) !== 0n) {
                    res = res | i_x
                }
                i_n = i_n << 1n
            }
            i_x = i_x << 1n

        }
        
        return Number(res)
    }
}
